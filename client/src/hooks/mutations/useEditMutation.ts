import { useQueryClient, useMutation } from 'react-query';
import { EditPatch } from '../../apis/api/EditRecord';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/atoms/modalState';
import { toast } from 'react-toastify';
interface EditDataType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: string;
}
export default function useEditMutation(key: string, id: number) {
    const [moodal, setModal] = useRecoilState(modalState);
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
                setModal(false);
                toast.success('글 수정을 완료했습니다');
            },
            onError(err) {
                setModal(true);
                toast.error('글 수정을 실패했습니다.');
            },
        }
    );
}
