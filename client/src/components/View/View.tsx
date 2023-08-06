import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import RecrodList from './RecordList';
import ViewLayout from '../common/Layout/ViewLayout';
import {
    ViewPageNation,
    Page,
    ViewSection,
    PrevButton,
    NextButton,
} from './style/RecordList';
import { useQuery } from 'react-query';
import { GetViewList } from '../../apis/api/ViewList';
export default function View() {
    // let page = 1;
    let totalPage: number | undefined = 0;
    let [page, setPage] = useState(1);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    let [displayPage, setDisplayPage] = useState<number[]>();
    const { data, isLoading } = useQuery(
        ['record', page],
        () => GetViewList(page),
        {
            staleTime: Infinity,
            select: (record) => record.log,
            refetchOnWindowFocus: false,
            onSuccess(data) {
                console.log(data);
            },
            onError(err) {
                console.log(err);
            },
        }
    );

    if (data?.totalCount && data?.limit)
        totalPage = Math.ceil(data?.totalCount / data?.limit);

    let totalPageArr: number[] = [0];
    if (data?.limit) {
        for (let i = 1; i <= totalPage - 1; i++) {
            totalPageArr.push(i);
        }
    }
    //[[1,2,3,4,5],[6,7,8,9,10]]
    let limit = 5;
    let PageArr = new Array(Math.ceil(totalPage / limit));
    let [positionPage, setPositionPage] = useState(0);
    for (let i = 0; i < Math.ceil(totalPage / limit); i++) {
        //PageArr[i] = new Array(limit);
        // 0,5 5,10
        PageArr[i] = totalPageArr.slice(limit * i, limit * i + limit);
        //PageArr[i] = i;
    }
    //PageArr.map((item, index) => (item[index] = index));
    // let PageArr = new Array(5)
    //     .fill(0)
    //     .map(() => new Array(Math.ceil(totalPage / limit)));

    console.log(PageArr);
    //개수만큼 페이지를 나타내고싶다.
    // useEffect(() => {
    //     if (page % 5 === 0) {
    //         setPositionPage((prev) => prev + 1);
    //     } else if (page % 5 === 1) {
    //         setPositionPage((prev) => prev - 1);
    //     }
    // }, [page]);
    const NextPageHandler = (item: number) => {
        setPage(item);
    };
    const PrevHandler = () => {
        if (page !== 1) {
            setPage((prev) => prev - 1);
            if (page % limit === 1) {
                setPositionPage((prev) => prev - 1);
            }
        }
    };

    const NextHandler = () => {
        if (totalPage)
            if (page < totalPage) {
                setPage((prev) => prev + 1);
                if (page >= limit && page % limit === 0) {
                    setPositionPage((prev) => prev + 1);
                }
            }
    };
    console.log(PageArr);
    console.log(page);
    //prev,next 버튼누르면 5개 단위로 변화

    return (
        <ViewLayout>
            <ViewSection view={isMobile}>
                <h2 className="ir">일상기록</h2>

                {data ? <RecrodList data={data} /> : <></>}

                <ViewPageNation>
                    <PrevButton onClick={PrevHandler} child={page}>
                        Prev
                    </PrevButton>
                    {PageArr[positionPage]?.map(
                        (item: number, index: number) => (
                            <Page
                                child={
                                    page % limit === 0 ? limit : page % limit
                                }
                                key={index}
                                onClick={() => {
                                    NextPageHandler(item + 1);
                                }}
                            >
                                {item + 1}
                            </Page>
                        )
                    )}
                    <NextButton
                        onClick={NextHandler}
                        child={page === totalPage ? page : 0}
                    >
                        Next
                    </NextButton>
                </ViewPageNation>
            </ViewSection>
        </ViewLayout>
    );
}
