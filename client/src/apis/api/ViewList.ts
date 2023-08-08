import React from 'react';
import axios from 'axios';
import { Api } from '../instance';
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
interface LogType {
    log: GetViewListType;
}
const GetViewList = async (Page: number, id: number): Promise<LogType> => {
    //http://localhost:4000/api/log/1/list?page=1
    try {
        const res = await Api.get<LogType>(`/api/log/${id}/list`, {
            params: {
                page: Page,
            },
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
export { GetViewList };
