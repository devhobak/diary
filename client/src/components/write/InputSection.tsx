import { useState, useEffect, useRef } from 'react';
import { drop, SelectFile, DeleteFile } from '../../utils/draganddrop';
import { FileImg, FileDelete, Filep } from '../home/modal/style/inputSection';
import deleteImg from '../../assets/close.png';
import {
    WriteSection,
    WriteForm,
    WriteTitle,
    WriteContents,
    WriteDiv,
    ImageLabel,
    FileLabel,
    SubmitButton,
    FileContainer,
    DateP,
    Color,
} from './style/inputSection';
import useRecord from '../../hooks/useRecord';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formatCurDay } from '../../recoil/selectors/date';
import { curDateState } from '../../recoil/atoms/calendarState';
import { confirmState } from '../../recoil/atoms/modalState';
import Modal from '../modal/Modal';
import { useMediaQuery } from 'react-responsive';

export default function InputSection() {
    let { onSubmit, setFile, type } = useRecord();
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    let [day, setDay] = useRecoilState(curDateState);
    let date = useRecoilValue(formatCurDay);
    let [confirmModal, setConfirmModal] = useRecoilState(confirmState);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    useEffect(() => {
        drop(dropSection.current, setFiles, setFile);
        console.log(files);
    }, [files]);
    useEffect(() => {
        setDay(new Date());
    }, []);
    const handleConfirm = () => {
        //setConfirmModal(true);
    };
    return (
        <WriteSection view={isMobile}>
            <h2 className="ir">게시물 작성</h2>
            <DateP>{date}</DateP>
            <WriteForm onSubmit={onSubmit} view={isMobile}>
                <Color
                    type="color"
                    name="content_color"
                    defaultValue="#ffffff"
                ></Color>
                {typeof files === 'string' ? (
                    <ImageLabel ref={dropSection} view={isMobile}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => SelectFile(e, setFiles, setFile)}
                        ></input>
                        <FileContainer>
                            <FileImg src={files} alt="이미지" />
                            <FileDelete
                                src={deleteImg}
                                alt="사진삭제"
                                onClick={(e) =>
                                    DeleteFile(e, setFiles, setFile)
                                }
                            />
                        </FileContainer>
                    </ImageLabel>
                ) : (
                    <FileLabel ref={dropSection} view={isMobile}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => SelectFile(e, setFiles, setFile)}
                        ></input>
                        <Filep>
                            Drop your file here to upload or select from storage
                        </Filep>
                    </FileLabel>
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
                    <SubmitButton type="submit" onClick={handleConfirm}>
                        완료
                    </SubmitButton>
                </WriteDiv>
                {confirmModal ? <Modal type={type} page="write" /> : <></>}
            </WriteForm>
        </WriteSection>
    );
}
