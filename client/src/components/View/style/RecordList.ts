import styled from 'styled-components';
interface ViewType {
    view: boolean;
}
interface PropsType {
    color: string;
}
interface ChildType {
    child: number;
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
    padding: 10px 0;
`;
const ViewUl = styled.ul<ViewType>`
    height: ${(props) => (props.view ? '87%' : '90%')};
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const ViewLi = styled.li`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    // border: 1px solid #dbdbdb;
    //border-radius: 10px;
`;
const ViewDate = styled.p`
    width: 100%;
    height: 20px;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 20px;
    padding: 10px;
`;
const ViewImg = styled.img`
    height: 400px;
    width: 50%;
`;
const ViewNoImg = styled.div<PropsType>`
    height: 400px;
    width: 50%;
    background-color: ${(props) => props.color};
`;
const ViewTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;
`;
const ViewContent = styled.div`
    height: 400px;
    width: 50%;
    font-size: 16px;
`;
const ViewPageNation = styled.div`
    width: 50%;
    display: flex;
    gap: 3px;
    // position: absolute;
    //bottom: 0px;
    padding: 10px;
    margin: 0 auto;
`;
const Page = styled.div<ChildType>`
    // position: absolute;
    // bottom: 0px;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border-radius: 50%;
    font-size: 1.5rem;
    padding-top: 5px;
    margin: 0 auto;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.inputBoxColor};
    }

    &:nth-child(${({ child }) => child + 1}) {
        background-color: ${({ theme }) => theme.color.inputBoxColor};
    }
`;
const Content = styled.div`
    width: 50%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px;
    background-color: #fffff2;
`;
const PrevButton = styled.button<ChildType>`
    border: 0;
    background-color: #fff;
    font-weight: 800;
    color: ${(props) => (props.child === 1 ? '#dbdbdb' : 'rgb(251, 217, 109)')};
`;
const NextButton = styled.button<ChildType>`
    border: 0;
    background-color: #fff;
    font-weight: 800;
    color: ${({ theme }) => theme.color.inputBoxColor};
    color: ${(props) => (props.child !== 0 ? '#dbdbdb' : 'rgb(251, 217, 109)')};
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
    Content,
    ViewTitle,
    ViewNoImg,
    NextButton,
    PrevButton,
};
