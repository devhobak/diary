import { Api } from '../instance';
interface EditType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
}
const EditPatch = async (
    { ...data }: EditType,
    id: number
): Promise<boolean> => {
    try {
        const res = await Api.patch<boolean>(`/api/log/${id}`, {
            content_title: data.content_title,
            content_main: data.content_main,
        });
        return await res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export { EditPatch };
