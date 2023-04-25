import styled from 'styled-components';
const RecordBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const RecordSection = styled.section`
    position: relative;
    width: 54.4rem;
    height: 73rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0 auto;
    padding: 2.2rem 3.2rem;
    border-radius: 15px;
    border: 1px solid #dbdbdb;
`;
const CloseButton = styled.img`
    position: absolute;
    top: 22px;
    right: 32px;
`;
const Date = styled.div`
    font-size: 2.4rem;
    text-align: left;
    margin-bottom: 25px;
`;

export { RecordBackground, RecordSection, CloseButton, Date };
