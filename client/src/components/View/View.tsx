import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import RecordList from './RecordList';
import {
    ViewPageNation,
    Page,
    PrevButton,
    NextButton,
} from './style/RecordList';

import useViewQuery from '../../hooks/queries/useViewQuery';

export default function View() {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    let totalPage: number | undefined = 0;
    let [page, setPage] = useState(1);
    let totalPageArr: number[] = [0];
    let limit = 5;
    let PageArr = new Array(Math.ceil(totalPage / limit));
    let [positionPage, setPositionPage] = useState(0);
    const { data } = useViewQuery(page);

    if (data?.totalCount && data?.limit)
        totalPage = Math.ceil(data?.totalCount / data?.limit);

    if (data?.limit) {
        for (let i = 1; i <= totalPage - 1; i++) {
            totalPageArr.push(i);
        }
    }

    for (let i = 0; i < Math.ceil(totalPage / limit); i++) {
        PageArr[i] = totalPageArr.slice(limit * i, limit * i + limit);
    }

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

    return (
        <>
            <h2 className="ir">일상기록</h2>
            {data?.totalCount ? <RecordList data={data} page={page} /> : <></>}
            {data?.totalCount ? (
                <ViewPageNation page={PageArr.length + 1}>
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
            ) : (
                <></>
            )}
        </>
    );
}
