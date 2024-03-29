import Home from 'components/home/Home';
import Days from 'components/home/calendar/Days';

import { render } from './provider-utils';
import { fireEvent, screen } from '@testing-library/react';
import Record from 'components/home/modal/Record';
import InputSection from 'components/home/modal/InputSection';
import Diary from 'components/home/modal/Diary';

/**
 * @jest-environment jsdom
 */

jest.mock('heic2any', () => ({ window: jest.fn() }));

let today = new Date();
let todaydate = `${today.getFullYear()}-${
    today.getMonth() + 1
}-${today.getDate()}`;

const days = ['일', '월', '화', '수', '목', '금', '토'];

describe('Home 페이지 테스트', () => {
    test('Home 렌더링이 잘된다.', async () => {
        render(<Home />);
    });

    test('달력 날짜 목록이 렌더링 된다. ', async () => {
        render(<Days days={days} />);
        const dateLi = await screen.findAllByRole('listitem');
        dateLi.forEach((date) => {
            expect(date).toBeInTheDocument();
        });
    });

    test('오늘 날짜를 선택하면 모달이 나타난다.', () => {
        render(<Days days={days} />);
        const todayLi = screen.getByTestId(`dateLi-${todaydate}`);
        expect(todayLi).toBeInTheDocument();
        fireEvent.click(todayLi);
        const modal = screen.getByText('일기 모달');
        expect(modal).toBeInTheDocument();
    });

    test('색상을 선택하면 모달 배경이 바뀐다.', () => {
        const data = [
            {
                id: 1,
                user_id: 1,
                datetime: todaydate,
                content_title: '일기제목',
                content_main: '내용',
                color: 'fff',
                content_image: '',
            },
        ];
        render(<Diary data={data} />);
        const backgroud = screen.getByTestId('diary');
        expect(backgroud).toHaveStyle({ color: data[0].color });
    });
});
