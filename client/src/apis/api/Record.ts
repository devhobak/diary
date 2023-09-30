import { authApi } from '../instance';

import type {
    GetRecordType,
    ResponseLogType,
    PostDataType,
    EditType,
} from '../../types/serverDataType';
interface ParamType {
    year: string;
    month: string;
}
interface PostRecordType {
    message: string;
}

const getRecord = async (
    { year, month }: ParamType,
    id: number
): Promise<ResponseLogType<GetRecordType[]>> => {
    try {
        const res = await authApi.get<ResponseLogType<GetRecordType[]>>(
            `api/log/${id}/date`,
            {
                params: {
                    year: year,
                    month: month,
                },
            }
        );
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
const getTodayRecord = async (
    today: string,
    id: number
): Promise<ResponseLogType<GetRecordType[]>> => {
    try {
        //http://localhost:5000/api/log/1/day/2023-04-15
        const res = await authApi.get<ResponseLogType<GetRecordType[]>>(
            `api/log/${id}/day/` + today
        );
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

const postRecord = async ({
    user_id,
    datetime,
    content_title,
    content_main,
    content_image,
    color,
}: PostDataType): Promise<PostRecordType> => {
    try {
        const res = await authApi.post<PostRecordType>('api/log', {
            user_id: user_id,
            datetime: datetime,
            content_title: content_title,
            content_main: content_main,
            content_image: content_image,
            color: color,
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

const EditPatch = async (
    { ...data }: EditType,
    id: number
): Promise<boolean> => {
    try {
        const res = await authApi.patch<boolean>(`/api/log/${id}`, {
            content_title: data.content_title,
            content_main: data.content_main,
            content_image: data.content_image,
            color: data.color,
        });
        return await res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export { getRecord, postRecord, getTodayRecord, EditPatch };
