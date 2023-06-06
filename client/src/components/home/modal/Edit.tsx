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
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { modalState } from '../../../recoil/atoms/modalState';
import { ColorState, positionState } from '../../../recoil/atoms/recordState';
import useEditRecord from '../../../hooks/useEditRecord';
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
}
interface PropsType {
    data: GetDataType[];
    //positionPost: number;
}
//id 와 데이터 전달
export default function Edit(props: PropsType) {
    console.log(props.data);
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    let selectDate = useRecoilValue(selectDateState);
    let [date, setDate] = useRecoilState(dateState);
    let [modal, setClose] = useRecoilState(modalState);
    let [color, setColor] = useRecoilState(ColorState);
    const [positionPost, setPositionPost] = useRecoilState(positionState);
    useEffect(() => {
        drop(dropSection.current, setFiles, setFile);
        console.log(files);
    }, [files]);

    const { onSubmit, setFile } = useEditRecord(props.data[positionPost].id);
    const ModalClose = () => {
        let arr = [...date];
        date.map((item) => {
            if (item.date === selectDate.date) {
                setTimeout(() => {
                    setClose(false);
                    setDate(arr);
                }, 100);
            }
        });
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
                    type="color"
                    onChange={(e) => {
                        handleColor(e);
                    }}
                ></ColorInput>
                <RecordInput
                    id="daily"
                    type="text"
                    name="content_title"
                    defaultValue={props.data[positionPost].content_title}
                ></RecordInput>
                <InputLabel htmlFor="record">기록</InputLabel>
                <Recordarea
                    id="record"
                    name="content_main"
                    defaultValue={props.data[positionPost].content_main}
                ></Recordarea>
                {props.data[positionPost].content_image ? (
                    <ImgLabel ref={dropSection}>
                        <input
                            type="file"
                            className="visually-hidden"
                            onChange={(e) => SelectFile(e, setFiles, setFile)}
                            name="content_image"
                        ></input>
                        <FileContainer>
                            <FileImg
                                src={props.data[positionPost].content_image}
                                alt="이미지"
                            />
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

                <RecordButton find="confirm" type="submit" onClick={ModalClose}>
                    완료
                </RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}
