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
} from './style/inputSection';
import useRecord from '../../hooks/useRecord';

export default function InputSection() {
    let { onSubmit } = useRecord();
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    useEffect(() => {
        drop(dropSection.current, setFiles);
        console.log(files);
    }, [files]);
    return (
        <WriteSection>
            <h2 className="ir">게시물 작성</h2>
            <WriteForm onSubmit={onSubmit}>
                {typeof files === 'string' ? (
                    <ImageLabel ref={dropSection}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => SelectFile(e, setFiles)}
                            name="content_image"
                        ></input>
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
                    <FileLabel ref={dropSection}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => SelectFile(e, setFiles)}
                        ></input>
                        <Filep>
                            Drop your file here to upload or select from storage
                        </Filep>
                    </FileLabel>
                )}
                <WriteDiv>
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
        </WriteSection>
    );
}
