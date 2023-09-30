import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';
import { useRecoilValue } from 'recoil';

import { getRecord } from '../../apis/api/Record';
import { curDateState } from '../../recoil/atoms/calendarState';

import { GetRecordType, ResponseLogType } from '../../types/serverDataType';

export default function useGetReportQuery() {
    const navigate = useNavigate();
    const curDate = useRecoilValue(curDateState);
    let GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const id = Number(localStorage.getItem('User'));

    const { data, isSuccess } = useQuery<
        ResponseLogType<GetRecordType[]>,
        AxiosError,
        GetRecordType[]
    >(['record', GetMonth, { id: id }], () => getRecord(GetMonth, id), {
        select: (record) => record.log,
        refetchOnWindowFocus: true,
        staleTime: Infinity,
        retry: 2,
        onError(err: AxiosError) {
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('UserId');
                localStorage.removeItem('token');
                toast.error(
                    '로그인 시간이 만료되었습니다. 다시 로그인 해주세요'
                );
                navigate('/');
            }
        },
    });
    return { data, isSuccess };
}
