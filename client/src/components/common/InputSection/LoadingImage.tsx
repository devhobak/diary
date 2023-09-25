import { ReactComponent as Rolling } from '../../../assets/Rolling-1.7s-200px.svg';
import { ImageLoading } from './style/inputSection';
interface PropsType {
    view: string;
}
export default function LoadingImage(props: PropsType) {
    return (
        <>
            <ImageLoading view={props.view}>
                <Rolling width="50px" height="50px" />
            </ImageLoading>
        </>
    );
}
