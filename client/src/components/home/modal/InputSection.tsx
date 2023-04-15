import React, { useRef, useState, useEffect } from 'react';
import {
    RecordInput,
    RecordInputSection,
    RecordForm,
    FileLabel,
    InputLabel,
    RecordButton,
    Recordarea,
    Filep,
    ImgLabel,
    FileImg,
} from './style/inputSection';
import { displayImg, drop } from '../../../utils/draganddrop';
export default function InputSection() {
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();

    useEffect(() => {
        drop(dropSection.current, setFiles);
        console.log(files);
    }, [files]);

    return (
        <RecordInputSection>
            <h3 className="ir">오늘의 일상</h3>
            <RecordForm>
                <InputLabel htmlFor="daily">오늘의 일상</InputLabel>
                <RecordInput
                    id="daily"
                    type="text"
                    placeholder="제목을 입력해주세요"
                ></RecordInput>
                <InputLabel htmlFor="record">기록</InputLabel>
                <Recordarea
                    id="record"
                    placeholder="일상을 기록해주세요"
                ></Recordarea>
                {typeof files === 'string' ? (
                    <ImgLabel ref={dropSection}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => displayImg(e, setFiles)}
                        ></input>
                        <FileImg src={files} alt="이미지" />
                    </ImgLabel>
                ) : (
                    <FileLabel ref={dropSection}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => displayImg(e, setFiles)}
                        ></input>
                        <Filep>
                            Drop your file here to upload or select from storage
                        </Filep>
                    </FileLabel>
                )}

                <RecordButton find="submit">사진 첨부하기</RecordButton>
                <RecordButton find="confirm">완료</RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}