import { useQueryClient, useMutation } from 'react-query';
import { EditPatch } from '../apis/api/EditRecord';
interface EditDataType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
}
export default function useEditMutation(key: string, id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        key,
        (variable: EditDataType) => EditPatch(variable, id),
        {
            onSuccess(data) {
                console.log(data);
                queryClient.invalidateQueries(['record'], {
                    refetchInactive: true,
                });
            },
            onError(err) {
                console.log(err);
            },
        }
    );
}
