import { CalendarLayout } from '../home/style/style';
import ViewLayout from './Layout/ViewLayout';
export default function LoadingView({ children }: { children?: JSX.Element }) {
    return (
        <ViewLayout>
            <CalendarLayout>{children}</CalendarLayout>
        </ViewLayout>
    );
}
