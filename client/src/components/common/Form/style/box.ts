import styled from 'styled-components';

const LoginArticle = styled.article`
    margin: 120px auto;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    text-align: center;
    padding: 44px 34px;
    width: 44.3rem;
    height: 66rem;
    border-radius: 12px;
    box-shadow: 4px 9px 5px 0px rgba(189, 182, 189, 1);
`;
export { LoginArticle };
