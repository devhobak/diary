import { useMediaQuery } from 'react-responsive';
import { GetRecordType } from '../../../types/serverDataType';

import {
    DiarySection,
    DiaryTextarea,
    DiaryTitle,
    DiaryLabel,
    DiaryImgDiv,
    DiaryList,
    Diaryli,
    DiaryImg,
} from './style/diary';

interface ProsType {
    data: GetRecordType[];
    type?: string;
}
export default function Diary(props: ProsType) {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <DiarySection color={`#${props.data[0]?.color}`} view={isMobile}>
            <h3 className="ir">오늘의 일상</h3>
            <DiaryList>
                {props.data?.map((item: GetRecordType, idx: number) => {
                    return (
                        <Diaryli key={idx}>
                            <DiaryLabel>제목</DiaryLabel>
                            <DiaryTitle>{item.content_title}</DiaryTitle>
                            <DiaryLabel>기록</DiaryLabel>
                            {item.content_image ? (
                                <>
                                    <DiaryImgDiv>
                                        <DiaryImg
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
                    );
                })}
            </DiaryList>
        </DiarySection>
    );
}
