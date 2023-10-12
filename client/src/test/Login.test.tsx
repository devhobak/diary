import { render } from './provider-utils';
import { fireEvent, screen } from '@testing-library/react';
import Form from 'components/login/Form';

describe('로그인/회원가입 테스트', () => {
    test('아이디창에 유효하지 않는 값이 들어가면" 올바른 이메일 형식을 입력해주세요" 문구가 뜬다.', () => {
        render(<Form />);
        const loginInput = screen.getByPlaceholderText('이메일');
        fireEvent.change(loginInput, {
            target: { value: '유효하지않는 이메일' },
        });
        const loginBtn = screen.getByText('로그인');
        fireEvent.submit(loginBtn);
        const errorMessage =
            screen.getByText('올바른 이메일 형식을 입력해주세요');
        expect(errorMessage).toBeInTheDocument();
    });

    test('비밀번호창에 유효하지 않는 값이 들어가면" 8자리이상 20자리이하 영어와 숫자 조합으로 입력해주세요" 문구가 뜬다.', () => {
        render(<Form />);
        const pwInput = screen.getByPlaceholderText('비밀번호');
        fireEvent.change(pwInput, {
            target: { value: '1234' },
        });
        const loginBtn = screen.getByText('로그인');
        fireEvent.submit(loginBtn);
        const errorMessage = screen.getByText(
            '8자리이상 20자리이하 영어와 숫자 조합으로 입력해주세요'
        );
        expect(errorMessage).toBeInTheDocument();
    });

    test('아이디와 비밀번호 모두 작성하지 않으면 오류메시지가 뜬다.', () => {
        render(<Form />);
        const loginBtn = screen.getByText('로그인');
        fireEvent.submit(loginBtn);
        const errorMessage = screen.getAllByText(/입력해주세요/);
        errorMessage.forEach((error) => {
            expect(error).toBeInTheDocument();
        });
    });
});
