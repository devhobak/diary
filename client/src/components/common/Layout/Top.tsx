import styled from 'styled-components';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';

import { LogOutButton } from './style/navbar';
import { curDateState } from '../../../recoil/atoms/calendarState';

const TopLayout = styled.section`
    width: 100%;
    height: 7vh;
    grid-area: top;
    background-color: #ffff;
    display: flex;
`;

export default function Top() {
    const curDate = useRecoilValue(curDateState);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    let GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const Logout = () => {
        toast.success('로그아웃 되었습니다.');
        navigate('/');
        localStorage.removeItem('User');
        queryClient.removeQueries([
            'record',
            GetMonth,
            { id: Number(localStorage.getItem('User')) },
        ]);
    };
    return (
        <TopLayout>
            <LogOutButton onClick={Logout}>로그아웃</LogOutButton>
        </TopLayout>
    );
}
