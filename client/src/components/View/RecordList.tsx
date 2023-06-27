import React from 'react';
import {
    ViewUl,
    ViewImg,
    ViewLi,
    ViewDate,
    ViewTitle,
    ViewContent,
    ViewNoImg,
    Content,
} from './style/RecordList';
import { useMediaQuery } from 'react-responsive';
interface GetViewListType {
    totalCount: number;
    page: number;
    limit: number;
    prevPage: string;
    nextPage: string;
    logList: GetRecordType[];
}
interface GetRecordType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    color: string;
    content_image: string;
}
interface ProsType {
    data: GetViewListType;
}
export default function RecrodList(props: ProsType) {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <ViewUl view={isMobile}>
            {props.data.logList.map((item, index) => (
                <ViewLi key={index}>
                    <ViewDate>{item.datetime.split(' ')[0]}</ViewDate>
                    {item.content_image ? (
                        <ViewImg src={item.content_image} alt="게시한 이미지" />
                    ) : (
                        <ViewNoImg color={`#${item.color}`}></ViewNoImg>
                    )}

                    <Content>
                        <ViewTitle>{item.content_title}</ViewTitle>
                        <ViewContent>{item.content_main}</ViewContent>
                    </Content>
                </ViewLi>
            ))}
        </ViewUl>
    );
}
