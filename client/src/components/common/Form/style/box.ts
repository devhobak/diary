import styled from 'styled-components';
interface PropsType {
    isMobile: boolean;
}

const LoginArticle = styled.article<PropsType>`
    margin: ${(props) => (props.isMobile ? '15px auto' : '120px auto')};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    text-align: center;
    padding: 44px 34px;
    width: ${(props) => (props.isMobile ? '100%' : '44.3rem')};
    height: ${(props) => (props.isMobile ? '100vh' : '66rem')};
    border-radius: 12px;
    box-shadow: 4px 9px 5px 0px rgba(189, 182, 189, 1);
`;

const LogoImg = styled.img`
    width: 200px;
    height: 38px;
`;
export { LoginArticle, LogoImg };
