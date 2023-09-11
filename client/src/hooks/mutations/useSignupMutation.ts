import { useMutation } from 'react-query';
import { LoginCheck } from '../../apis/api/Login';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

interface FormType {
    username: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}

export default function useSignupMutation() {
    let navigate = useNavigate();

    const SignUpmutation = useMutation(
        (variable: FormType) => LoginCheck(variable, '/api/auth/signup'),
        {
            onSuccess: () => {
                toast.success('회원가입 성공했습니다. 로그인 해주세요');
                navigate('/');
            },
            onError: () => {
                toast.error('회원가입에 실패했습니다. 관리자에게 문의해주세요');
            },
        }
    );
    return SignUpmutation;
}
