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
import { SelectFile, drop, DeleteFile } from '../../../utils/imageUpload';
import { useRecoilState } from 'recoil';
import useRecord from '../../../hooks/useRecord';
import { ColorState } from '../../../recoil/atoms/recordState';
import LoadingImage from '../../common/InputSection/LoadingImage';
import { loadingState } from '../../../recoil/atoms/loadingState';

export default function InputSection() {
    let dropSection = useRef<HTMLLabelElement>(null);
    let [files, setFiles] = useState<string | null | ArrayBuffer>();
    const [color, setColor] = useRecoilState(ColorState);
    let [loading, setLoading] = useState(false);
    let [s3file, sets3File] = useState<string>('');
    //let [loading, setLoading] = useRecoilState(loadingState);
    useEffect(() => {
        drop(dropSection.current, setFiles, sets3File, setLoading);
    }, [files]);
    let { onSubmit } = useRecord(s3file);

    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };
    return (
        <RecordInputSection>
            <h3 className="ir">오늘의 일상</h3>
            <RecordForm onSubmit={onSubmit}>
                <InputLabel htmlFor="daily">오늘의 일상</InputLabel>
                <div className="tooltip">
                    <label htmlFor="color" className="ir">
                        색상 선택
                    </label>
                    <ColorInput
                        id="color"
                        type="color"
                        onChange={(e) => {
                            handleColor(e);
                        }}
                        name="content_color"
                        defaultValue="#FBD96D"
                    ></ColorInput>
                    <span className="tooltiptext">
                        🐶 선택한 색상으로 기록됩니다.
                    </span>
                </div>

                <RecordInput
                    id="daily"
                    type="text"
                    name="content_title"
                    placeholder="제목을 입력해주세요"
                ></RecordInput>

                <Recordarea
                    id="record"
                    name="content_main"
                    placeholder="일상을 기록해주세요"
                ></Recordarea>
                {typeof files === 'string' ? (
                    <ImgLabel ref={dropSection}>
                        <FileContainer>
                            <FileImg src={s3file} alt="이미지" />
                            <FileDelete
                                src={deleteImg}
                                alt="사진삭제"
                                onClick={(e) => DeleteFile(e, setFiles, s3file)}
                            />
                        </FileContainer>
                    </ImgLabel>
                ) : (
                    <>
                        {loading ? (
                            <LoadingImage view="modal" />
                        ) : (
                            <FileLabel ref={dropSection}>
                                <input
                                    type="file"
                                    className="visually-hidden"
                                    onChange={(e) =>
                                        SelectFile(
                                            e,
                                            setFiles,
                                            sets3File,
                                            setLoading
                                        )
                                    }
                                ></input>
                                <Filep>
                                    Drop your file here to upload or select from
                                    storage
                                </Filep>
                            </FileLabel>
                        )}
                    </>
                )}

                <RecordButton
                    find="confirm"
                    type="submit"
                    disabled={loading ? true : false}
                >
                    완료
                </RecordButton>
            </RecordForm>
        </RecordInputSection>
    );
}
