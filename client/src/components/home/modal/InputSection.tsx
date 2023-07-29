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
    FileContainer,
    FileDelete,
    ColorInput,
} from './style/inputSection';
import deleteImg from '../../../assets/close.png';
import { SelectFile, drop, DeleteFile } from '../../../utils/draganddrop';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useRecord from '../../../hooks/useRecord';
import { confirmState, modalState } from '../../../recoil/atoms/modalState';
import { ColorState } from '../../../recoil/atoms/recordState';

export default function InputSection() {
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    const [color, setColor] = useRecoilState(ColorState);
    const [confirmModal, setConfirmModal] = useRecoilState(confirmState);
    let setModalClose = useSetRecoilState(modalState);
    useEffect(() => {
        drop(dropSection.current, setFiles, setFile);
        console.log(files);
        console.log(confirmModal);
    }, [files]);
    let { onSubmit, setFile } = useRecord();
    const ModalClose = () => {
        //토스트 창뜨고,
        setTimeout(() => {
            setModalClose(false);
        }, 1000);
    };
    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        console.log(color);
    };
    return (
        <RecordInputSection>
            <h3 className="ir">오늘의 일상</h3>
            <RecordForm onSubmit={onSubmit}>
                <InputLabel htmlFor="daily">오늘의 일상</InputLabel>
                <ColorInput
                    id="color"
                    type="color"
                    onChange={(e) => {
                        handleColor(e);
                    }}
                    name="content_color"
                    defaultValue="#ffffff"
                ></ColorInput>
                <RecordInput
                    id="daily"
                    type="text"
                    name="content_title"
                    placeholder="제목을 입력해주세요"
                ></RecordInput>
                <InputLabel htmlFor="record">기록</InputLabel>
                <Recordarea
                    id="record"
                    name="content_main"
                    placeholder="일상을 기록해주세요"
                ></Recordarea>
                {typeof files === 'string' ? (
                    <ImgLabel ref={dropSection}>
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
                    </ImgLabel>
                ) : (
                    <FileLabel ref={dropSection}>
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

                <RecordButton find="confirm" onClick={ModalClose} type="submit">
                    완료
                </RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}
