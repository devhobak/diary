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
interface PageCountType {
    page: number;
}

const ViewSection = styled.section<ViewType>`
    width: ${(props) => (props.view ? '90%' : '100%')};
    height: ${(props) => (props.view ? '82vh' : '88vh')};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    padding: 10px 0;
`;

const ViewUl = styled.ul<ViewType>`
    width: 100%;
    height: ${(props) => (props.view ? '87%' : '90%')};
    overflow-y: scroll;
`;

const ViewLi = styled.li<TextType>`
    // 버튼이 눌리면 보이지 않는다.
    &:nth-child(${(props) => props.clickIndex}) > button {
        display: none;
    }
    //버튼을 누르면 글이 펼쳐진다.
    &:nth-child(${(props) => props.clickIndex}) > p.content {
        white-space: pre-line;
        overflow: visible;
        height: 10%;
    }
    &:nth-child(${(props) => props.clickIndex}) {
        height: auto;
    }
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: ${(props) => (props.isMobile ? '3% 8% 5%' : '3% 15%')};
    border-bottom: 1px solid ${(props) => props.theme.color.backgroundColor};
    text-align: center;
`;

const ViewDate = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    box-shadow: inset 0 -10px 0 ${(props) => props.theme.color.backgroundColor};
    margin-bottom: 10%;
    &:after {
        content: '';
        width: 0;
        height: 10px;
        display: inline-block;
        background: #d9fcdb;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        transition: 0.2s all;
    }
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
    margin-bottom: 20px;
`;

const ViewContent = styled.p`
    width: 100%;
    height: 1.5rem;
    overflow: hidden;
    font-size: 1.5rem;
    margin: 5px 0;
    white-space: pre-wrap;
`;

const MoreButton = styled.button<ContentType>`
    // ... 더보기를 표현
    &::before {
        content: '...';
    }
    display: ${(props) => (props.isLongContent ? 'block' : 'none')};
    width: 30%;
    border: 0;
    background-color: white;
    color: gray;
    margin-left: 80%;
`;

const ViewPageNation = styled.div<PageCountType>`
    width: 60%;
    height: 30px;
    display: flex;
    gap: 3px;
    margin: 20px auto;
`;

const Page = styled.div<ChildType>`
    width: 30px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border-radius: 50%;
    font-size: 1.5rem;
    margin: 0 auto;
    line-height: 30px;
    text-align: center;
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
