import styled from 'styled-components';
interface ViewType {
    view: boolean;
}
const ViewSection = styled.section<ViewType>`
    grid-area: main;
    width: ${(props) => (props.view ? '90%' : '65vw')};
    height: ${(props) => (props.view ? '80vh' : '90vh')};
    position: relative;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
const ViewUl = styled.ul<ViewType>`
    height: ${(props) => (props.view ? '87%' : '100%')};
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
    position: absolute;
    bottom: 0px;
    width: 50%;
    padding: 10px;
    margin: 0 auto;
`;
const Page = styled.div`
    // position: absolute;
    // bottom: 0px;
    width: 3rem;
    height: 3rem;
    border: 1px solid pink;
    border-radius: 50%;
    font-size: 1.5rem;
    padding-top: 5px;
    margin: 0 auto;
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
