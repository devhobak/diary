import { useState, useEffect, useRef } from 'react';
import { drop, SelectFile, DeleteFile } from '../../utils/draganddrop';
import { FileImg, FileDelete, Filep } from '../home/modal/style/inputSection';
import deleteImg from '../../assets/close.png';
import {
    WriteForm,
    WriteTitle,
    WriteContents,
    WriteDiv,
    ImageLabel,
    FileLabel,
    SubmitButton,
    FileContainer,
    Color,
} from './style/inputSection';
import useRecord from '../../hooks/useRecord';
import { useRecoilState } from 'recoil';
import { curDateState } from '../../recoil/atoms/calendarState';
import { useMediaQuery } from 'react-responsive';
import LoadingImage from '../common/InputSection/LoadingImage';

export default function InputSection() {
    let { onSubmit, setFile } = useRecord();
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    let [day, setDay] = useRecoilState(curDateState);
    let [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    useEffect(() => {
        drop(dropSection.current, setFiles, setFile, setLoading);
        console.log(files);
    }, [files]);
    useEffect(() => {
        setDay(new Date());
    }, []);
    return (
        <WriteForm onSubmit={onSubmit} view={isMobile}>
            <Color
                type="color"
                name="content_color"
                defaultValue="#ffffff"
            ></Color>
            {typeof files === 'string' ? (
                <ImageLabel ref={dropSection} view={isMobile}>
                    <FileContainer>
                        <FileImg src={files} alt="이미지" />
                        <FileDelete
                            src={deleteImg}
                            alt="사진삭제"
                            onClick={(e) => DeleteFile(e, setFiles)}
                        />
                    </FileContainer>
                </ImageLabel>
            ) : (
                <>
                    {loading ? (
                        <LoadingImage view="write" />
                    ) : (
                        <FileLabel ref={dropSection} view={isMobile}>
                            <>
                                <input
                                    type="file"
                                    className="visually-hidden"
                                    onChange={(e) =>
                                        SelectFile(
                                            e,
                                            setFiles,
                                            setFile,
                                            setLoading
                                        )
                                    }
                                ></input>
                                <Filep>
                                    Drop your file here to upload or select from
                                    storage
                                </Filep>
                            </>
                        </FileLabel>
                    )}
                </>
            )}
            <WriteDiv view={isMobile}>
                <WriteTitle
                    type="text"
                    name="content_title"
                    placeholder="제목을 입력해주세요"
                ></WriteTitle>
                <WriteContents
                    name="content_main"
                    placeholder="일상을 기록해주세요"
                ></WriteContents>
                <SubmitButton type="submit">완료</SubmitButton>
            </WriteDiv>
        </WriteForm>
    );
}
