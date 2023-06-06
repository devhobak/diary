import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prev from '../../../assets/chevron-left.png';
import next from '../../../assets/chevron-right.png';
import {
    DiarySection,
    DiaryTextarea,
    DiaryTitle,
    DiaryLabel,
    DiaryImgDiv,
    DiaryList,
    Diaryli,
    NextBtn,
    PrevBtn,
} from './style/diary';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ColorState, positionState } from '../../../recoil/atoms/recordState';
interface GetDataType {
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface ProsType {
    data: GetDataType[];
    type?: string;
    //setPositionPost: React.Dispatch<React.SetStateAction<number>>;
}
export default function Diary(props: ProsType) {
    const [nextclick, setNextClick] = useState(0);
    const [prevClick, setPrevClick] = useState(0);
    const setPositionPost = useSetRecoilState(positionState);
    const positionPost = useRecoilValue(positionState);
    const clickNext = () => {
        setNextClick((prev) => prev + 1);
    };
    const clickPrev = () => {
        setPrevClick((prev) => prev + 1);
    };
    let first = 0 - nextclick * 500 + prevClick * 500;
    let [color, setColor] = useRecoilState(ColorState);

    console.log(props.data);

    return (
        <DiarySection color={props.data[positionPost].color}>
            <h3 className="ir">오늘의 일상</h3>
            <DiaryList>
                {props.data?.map((item: GetDataType, idx: number) => {
                    let other = 500 * idx - nextclick * 500 + prevClick * 500;
                    if (first === 0) {
                        setPositionPost(0);
                    } else if (other === 0) {
                        setPositionPost(idx);
                    }

                    //setColor(props.data[idx].color);

                    return (
                        <>
                            <Diaryli key={idx} first={first} idx={other}>
                                {first !== 0 ? (
                                    <PrevBtn
                                        src={prev}
                                        alt="이전버튼"
                                        onClick={clickPrev}
                                    />
                                ) : (
                                    <></>
                                )}
                                {props.data.length - 1 !== idx ? (
                                    <NextBtn
                                        src={next}
                                        alt="다음버튼"
                                        onClick={clickNext}
                                    />
                                ) : (
                                    <></>
                                )}
                                <DiaryLabel>일상</DiaryLabel>
                                <DiaryTitle>{item.content_title}</DiaryTitle>
                                <DiaryLabel>기록</DiaryLabel>
                                {item.content_image ? (
                                    <>
                                        <DiaryImgDiv>
                                            <img
                                                style={{
                                                    width: '90%',
                                                    height: '90%',
                                                    objectFit: 'cover',
                                                }}
                                                src={item.content_image}
                                                alt="기록한 이미지"
                                            />
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
                            </Diaryli>
                        </>
                    );
                })}
            </DiaryList>
        </DiarySection>
    );
}
