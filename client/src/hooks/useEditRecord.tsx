import useEditMutation from './useEditMutation';
export default function useEditRecord(id: number) {
    const { mutate } = useEditMutation('edit', id);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData);
        console.log(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(e);
        const { content_title, content_main } = data;
        if (content_title && content_main) {
            mutate({ content_title, content_main });
        }
    };
    return { onSubmit };
}
