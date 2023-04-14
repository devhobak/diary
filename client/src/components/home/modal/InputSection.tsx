import React from 'react';
import {
    RecordInput,
    RecordInputSection,
    RecordForm,
    FileLabel,
    InputLabel,
    RecordButton,
    Recordarea,
    Filep,
} from './style/inputSection';
export default function InputSection() {
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
                <FileLabel>
                    <input type="file" style={{ display: 'none' }}></input>
                    <Filep>
                        Drop your file here to upload or select from storage
                    </Filep>
                </FileLabel>
                <RecordButton find="submit">사진 첨부하기</RecordButton>
                <RecordButton find="confirm">완료</RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}
