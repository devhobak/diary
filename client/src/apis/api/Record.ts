import { Api } from '../instance';

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
}
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
}
interface LogType {
    log: GetDataType[];
}
const getRecord = async ({ year, month }: ParamType): Promise<LogType> => {
    try {
        const res = await Api.get<LogType>('api/log/1/date', {
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
//나중에 instance 변경하기
const postRecord = async ({
    user_id,
    datetime,
    content_title,
    content_main,
    content_image,
}: PostDataType): Promise<PostRecordType> => {
    try {
        const res = await Api.post<PostRecordType>('api/log', {
            user_id: user_id,
            datetime: datetime,
            content_title: content_title,
            content_main: content_main,
            content_image: content_image,
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
export { getRecord, postRecord };
