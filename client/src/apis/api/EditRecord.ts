import { Api, authApi } from "../instance";
interface EditType {
   content_title: FormDataEntryValue;
   content_main: FormDataEntryValue;
   content_image: FormDataEntryValue;
   color: FormDataEntryValue;
}
const EditPatch = async ({ ...data }: EditType, id: number): Promise<boolean> => {
   try {
      const res = await authApi.patch<boolean>(`/api/log/${id}`, {
         content_title: data.content_title,
         content_main: data.content_main,
         content_image: data.content_image,
         color: data.color,
      });
      return await res.data;
   } catch (err) {
      return Promise.reject(err);
   }
};

export { EditPatch };
