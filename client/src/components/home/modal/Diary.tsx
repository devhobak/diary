import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRecoilValue } from 'recoil';
import { selectDateState } from '../../../recoil/atoms/calendarState';
import prev from '../../../assets/chevron-left.png';
import next from '../../../assets/chevron-right.png';
import {
    DiarySection,
    DiaryTextarea,
    DiaryTitle,
    DiaryLabel,
    DiaryImgDiv,
    SliderStyle,
} from './style/diary';
interface GetDataType {
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
}
interface ProsType {
    data?: GetDataType[];
}
export default function Diary(props: ProsType) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        nextArrow: <img src={next} alt="다음버튼" />,
        prevArrow: <img src={prev} alt="이전버튼" />,
    };
    const selectValue = useRecoilValue(selectDateState);
    let diary = props.data;
    let dateArr: string[] = [];
    diary?.map((item: GetDataType) => {
        dateArr.push(item.datetime.split('T')[0]);
    });
    return (
        <DiarySection>
            <h3 className="ir">오늘의 일상</h3>
            <SliderStyle {...settings}>
                {diary?.map((item: GetDataType, idx: number) => {
                    if (selectValue.date === dateArr[idx]) {
                        return (
                            <>
                                <DiaryLabel>일상</DiaryLabel>
                                <DiaryTitle>{item.content_title}</DiaryTitle>
                                <DiaryLabel>기록</DiaryLabel>
                                {item.content_image ? (
                                    <>
                                        <DiaryImgDiv>
                                            <img src="" alt="기록한 이미지" />
                                        </DiaryImgDiv>
                                        <DiaryTextarea type="image">
                                            {item.content_main}
                                        </DiaryTextarea>
                                    </>
                                ) : (
                                    <DiaryTextarea>
                                        {item.content_main}
                                    </DiaryTextarea>
                                )}
                            </>
                        );
                    }
                })}
            </SliderStyle>
        </DiarySection>
    );
}
