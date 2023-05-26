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
} from './style/inputSection';
import deleteImg from '../../../assets/close.png';
import { SelectFile, drop, DeleteFile } from '../../../utils/draganddrop';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import useRecord from '../../../hooks/useRecord';
interface PropType {
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function InputSection(props: PropType) {
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    let selectDate = useRecoilValue(selectDateState);
    let [date, setDate] = useRecoilState(dateState);
    useEffect(() => {
        drop(dropSection.current, setFiles);
        console.log(files);
    }, [files]);
    let { onSubmit } = useRecord();
    const ModalClose = () => {
        let arr = [...date];
        date.map((item, idx) => {
            if (item.date === selectDate.date) {
                props.setClose(true);
                setTimeout(() => {
                    setDate(arr);
                }, 100);
            }
        });
    };
    return (
        <RecordInputSection>
            <h3 className="ir">오늘의 일상</h3>
            <RecordForm onSubmit={onSubmit}>
                <InputLabel htmlFor="daily">오늘의 일상</InputLabel>
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
                    </ImgLabel>
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

                <RecordButton find="confirm" type="submit" onClick={ModalClose}>
                    완료
                </RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}
