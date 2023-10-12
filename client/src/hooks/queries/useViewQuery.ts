import { useQuery } from 'react-query';
import { GetViewList } from '../../apis/api/ViewList';

export default function useViewQuery(page: number) {
    const id = Number(localStorage.getItem('User'));

    const { data, isLoading } = useQuery(
        ['record', page, { id: id }],
        () => GetViewList(page, id),
        {
            staleTime: Infinity,
            select: (record) => record.log,
            refetchOnWindowFocus: false,
            suspense: true,
        }
    );
    return { data, isLoading };
}
