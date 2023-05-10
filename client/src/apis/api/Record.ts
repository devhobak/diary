import { Api } from '../instance';
interface GetRecordType {
    date: string[];
}
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
const getRecord = async ({
    year,
    month,
}: ParamType): Promise<GetRecordType> => {
    try {
        const res = await Api.get<GetRecordType>('api/log/1/date', {
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
            user_id: '1',
            datetime: '2023-05-04',
            content_title: 'hi1',
            content_main: 'hihi',
            content_image: 'image1.jpg',
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
export { getRecord, postRecord };
