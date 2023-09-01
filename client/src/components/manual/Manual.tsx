import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import {
    ModalBackground,
    ModalSection,
    CloseButton,
} from '../common/Modal/modal';
import { ManualDiv, ManualP, ManualImg, ManualSubP } from './style/manualstyle';

import manual1 from '../../assets/manual1.png';
import manual2 from '../../assets/manual2.png';
import manual3 from '../../assets/manual3.png';
import closeImg from '../../assets/close.png';

export default function Manual(props: {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const isMobile = useMediaQuery({ maxWidth: 414 });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const modalClose = () => {
        props.setModal(false);
    };

    return (
        <ModalBackground view={isMobile} isClose={props.modal}>
            <ModalSection view={isMobile} isClose={props.modal} color="#fffff3">
                <h2 className="ir">다이어리 설명서</h2>
                <CloseButton
                    src={closeImg}
                    alt="모달 닫는 버튼"
                    onClick={modalClose}
                />

                <Slider {...settings}>
                    <ManualDiv isMobile={isMobile}>
                        <ManualP>
                            오늘의 일상을 <br />
                            기록하세요!✨
                        </ManualP>
                        <ManualSubP>매일 한개의 글을 적을 수 있어요</ManualSubP>
                        <ManualImg src={manual1} alt="다이어리 메뉴얼 소개" />
                    </ManualDiv>
                    <ManualDiv isMobile={isMobile}>
                        <ManualP>
                            오늘하루는 <br />
                            어떤 색깔인가요?
                        </ManualP>
                        <ManualImg
                            src={manual2}
                            alt="다이어리 메뉴얼 소개 색깔"
                        />
                    </ManualDiv>
                    <ManualDiv isMobile={isMobile}>
                        <ManualP>
                            그래프로 한눈에 <br />알 수 있어요.
                        </ManualP>
                        <ManualSubP>
                            소중한 순간을 차곡차곡 쌓아봐요.
                        </ManualSubP>
                        <ManualImg
                            src={manual3}
                            alt="다이어리 메뉴얼 소개 통계"
                        />
                    </ManualDiv>
                </Slider>
            </ModalSection>
        </ModalBackground>
    );
}
