import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { GetViewListType } from '../../types/serverDataType';

import {
    ViewUl,
    ViewImg,
    ViewLi,
    ViewDate,
    ViewTitle,
    ViewContent,
    MoreButton,
} from './style/RecordList';
interface ProsType {
    data: GetViewListType;
    page: number;
}

export default function RecrodList(props: ProsType) {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    const [moreButton, setMoreButton] = useState<number>(0);
    const [longContent, setLongContent] = useState<boolean[]>([]);

    useEffect(() => {
        let Button = new Array(5);
        Button.fill(0).map((item, index) => item + index);
    }, []);

    const MoreButtonHandler = (index: number) => {
        setMoreButton(index + 1);
    };

    const getContentLen = () => {
        let longContents = props.data.logList.map(
            (item) => item.content_main.indexOf('\n') > 0
        );
        setLongContent([...longContents]);
    };

    useEffect(() => {
        getContentLen();
    }, [props.page]);

    return (
        <ViewUl mobile={isMobile}>
            {props.data.logList.map((item, index) => (
                <ViewLi key={index} clickIndex={moreButton} isMobile={isMobile}>
                    <ViewDate>{item.datetime.split(' ')[0]}</ViewDate>
                    <ViewTitle>{item.content_title}</ViewTitle>

                    {item.content_image ? (
                        <ViewImg
                            src={item.content_image}
                            mobile={isMobile}
                            alt="게시한 이미지"
                        />
                    ) : (
                        <></>
                    )}
                    <ViewContent className="content">
                        {item.content_main}
                    </ViewContent>
                    <MoreButton
                        isLongContent={longContent[index] as boolean}
                        onClick={() => MoreButtonHandler(index)}
                    >
                        더보기
                    </MoreButton>
                </ViewLi>
            ))}
        </ViewUl>
    );
}
