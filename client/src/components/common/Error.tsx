import errorImg from '../../assets/404.png';
import styled from 'styled-components';

const ErrorImg = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: 100px;
`;
export default function Error() {
    return <ErrorImg src={errorImg} alt="404에러메시지" />;
}
