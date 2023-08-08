import styled from 'styled-components';
interface PropsType {
    isMobile: boolean;
}
const RecordInfoSection = styled.section<PropsType>`
    width: ${(props) => (props.isMobile ? '90%' : '100%')};
    height: ${(props) => (props.isMobile ? '82vh' : '100%')};
    position: relative;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    padding: 30px;
`;
export { RecordInfoSection };
