import styled from 'styled-components';
import { ViewType } from '../../../types/style';

const RecordInfoSection = styled.section<ViewType>`
    width: ${(props) => (props.mobile ? '90%' : '100%')};
    height: ${(props) => (props.mobile ? '81vh' : '100%')};
    position: relative;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    padding: ${(props) => (props.mobile ? '30px 10px' : '30px')};
`;
const StatisticsNoticeArticle = styled.section`
    width: 100%;
    height: 70%;
    margin-bottom: 40px;
`;
const MyPageH2 = styled.h2`
    margin-bottom: 5%;
    text-align: left;
    font-size: 2.5rem;
    font-weight: 600;
`;

const StatisticsNotice = styled.p`
    margin-bottom: 3%;
    text-align: left;
    font-size: 1.6rem;
`;

const ChartArticle = styled.article`
    margin: 0 auto;
`;

const TotalBox = styled.div`
    margin-bottom: 20px;
    font-size: 1.6rem;
    height: 50px;
`;
const TotalNumberContents = styled.p`
    display: inline-block;
    margin-right: 10px;
    font-size: 1.6rem;
`;

const TotalNumber = styled.span`
    margin-right: 5px;
    font-size: 5rem;
    font-weight: 700;
    color: ${(props) => props.theme.color.inputBoxColor};
`;

const ButtonBox = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
`;

const YearSpan = styled.span`
    line-height: 40px;
    font-size: 1.8rem;
    font-weight: 600;
`;

const UserManage = styled.p`
    text-align: left;
    font-size: 1.6rem;
    margin-bottom: 20px;
`;

const UserregisterBox = styled.section`
    text-align: left;
`;
const UnregisterButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #e53a40;
    border: 0;
    border-radius: 20px;
    color: #fff;
`;

export {
    RecordInfoSection,
    StatisticsNoticeArticle,
    MyPageH2,
    StatisticsNotice,
    ChartArticle,
    TotalNumberContents,
    TotalNumber,
    TotalBox,
    ButtonBox,
    YearSpan,
    UserManage,
    UnregisterButton,
    UserregisterBox,
};
