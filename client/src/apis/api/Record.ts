import { Api, authApi } from '../instance';

interface ParamType {
    year: string;
    month: string;
}
interface PostRecordType {
    result: string;
}
interface PostDataType {
    user_id: number;
    datetime: string;
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: FormDataEntryValue;
}
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface LogType {
    log: GetDataType[];
}
const getRecord = async (
    { year, month }: ParamType,
    id: number
): Promise<LogType> => {
    try {
        const res = await authApi.get<LogType>(`api/log/${id}/date`, {
            params: {
                year: year,
                month: month,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
};
const getTodayRecord = async (today: string, id: number): Promise<LogType> => {
    try {
        //http://localhost:5000/api/log/1/day/2023-04-15
        const res = await authApi.get<LogType>(`api/log/${id}/day/` + today);
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
//나중에 instance 변경하기
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
export { getRecord, postRecord, getTodayRecord };
