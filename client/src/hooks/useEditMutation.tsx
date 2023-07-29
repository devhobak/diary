import { useQueryClient, useMutation } from 'react-query';
import { EditPatch } from '../apis/api/EditRecord';
import { useRecoilState } from 'recoil';
import { confirmState } from '../recoil/atoms/modalState';
import { toast } from 'react-toastify';
interface EditDataType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: string;
}
export default function useEditMutation(
    key: string,
    id: number,
    setType: React.Dispatch<React.SetStateAction<string>>
) {
    const [confirmModal, setConfirmModal] = useRecoilState(confirmState);
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
                setConfirmModal(true);
                setType('edit');
                console.log('수정완료');
                toast.success('글 수정 완료');
            },
            onError(err) {
                console.log(err);
                setConfirmModal(true);
                setType('error');
                toast.error('글 수정 실패');
            },
        }
    );
}
