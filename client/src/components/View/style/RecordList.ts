import styled from 'styled-components';

const ViewSection = styled.section`
    grid-area: main;
    width: 100rem;
    position: relative;
    height: 75rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
const ViewUl = styled.ul`
    height: 600px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const ViewLi = styled.li`
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    border: 1px solid #dbdbdb;
`;
const ViewDate = styled.p`
    width: 100%;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 20px;
`;
const ViewImg = styled.img`
    height: 300px;
    width: 50%;
`;
const ViewContent = styled.div`
    height: 300px;
    width: 50%;
`;
const ViewPageNation = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const Page = styled.div`
    position: fixed;
    bottom: 60px;
    width: 3rem;
    height: 3rem;
    border: 1px solid pink;
    border-radius: 50%;
    font-size: 1.5rem;
    padding-top: 5px;
    cursor: pointer;
`;
export {
    ViewSection,
    ViewUl,
    ViewDate,
    ViewImg,
    ViewLi,
    ViewContent,
    ViewPageNation,
    Page,
};
