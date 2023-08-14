import styled from 'styled-components';
interface ViewType {
    view: boolean;
}
interface PropsType {
    color: string;
    view: boolean;
}
interface ChildType {
    child: number;
}
interface TextType {
    clickIndex: number;
    isMobile: boolean;
}
interface ContentType {
    isLongContent: boolean;
}
const ViewSection = styled.section<ViewType>`
    //grid-area: main;
    width: ${(props) => (props.view ? '90%' : '100%')};
    height: ${(props) => (props.view ? '82vh' : '88vh')};
    //이유? %로하면 안되는
    // position: relative;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    //border-radius: 10px;
    padding: 10px 0;
`;

const ViewUl = styled.ul<ViewType>`
    width: 100%;
    height: ${(props) => (props.view ? '87%' : '90%')};
    overflow-y: scroll;
`;
const ViewLi = styled.li<TextType>`
    &:nth-child(${(props) => props.clickIndex}) > button {
        display: none;
    }

    &:nth-child(${(props) => props.clickIndex}) > p.content {
        white-space: pre-line;
        overflow: visible;
        height: 10%;
    }
    &:nth-child(${(props) => props.clickIndex}) {
        height: auto;
    }
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: ${(props) => (props.isMobile ? '2% 5%' : '2% 15%')};
    border-bottom: 1px solid #dbdbdb;
`;
const ViewDate = styled.p`
    width: 100%;
    text-align: left;
    font-size: 1.5rem;
`;
const ViewImg = styled.img<ViewType>`
    display: block;
    width: 100%;
    height: ${(props) => (props.view ? '300px' : '500px')};
    object-fit: contain;
`;
const ViewNoImg = styled.div<PropsType>`
    height: ${(props) => (props.view ? '300px' : '500px')};
    width: 100%;
    background-color: ${(props) => props.color};
    border: 1px solid #dbdbdb;
`;
const ViewTitle = styled.p`
    font-size: 1.8rem;
    text-align: left;
    margin-bottom: 2%;
`;
const ViewContent = styled.p`
    width: 100%;
    height: 1.7rem;
    overflow: hidden;
    white-space: pre-wrap;
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 5px;
`;
const MoreButton = styled.button<ContentType>`
    &::before {
        content: '...';
    }
    display: ${(props) => (props.isLongContent ? 'visible' : 'none')};
    width: 20%;
    border: 0;
    background-color: white;
    text-align: left;
    color: gray;
`;
const ViewPageNation = styled.div`
    width: 70%;
    display: flex;
    gap: 3px;
    padding: 10px;
    margin: 0 auto;
`;
const Page = styled.div<ChildType>`
    width: 30px;
    height: 30px;
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
    overflow: hidden;
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
    MoreButton,
};
