import React from 'react';
import { ConfirmModal, ModalBox, ModalButton, ModalMessage } from './style';
import { useRecoilState } from 'recoil';
import { confirmState, modalState } from '../../recoil/atoms/modalState';
import { useNavigate } from 'react-router';
interface ModalType {
    type: string;
    page: string;
}
export default function Modal(props: ModalType) {
    let text: string;
    let [modal, setModal] = useRecoilState(modalState);
    let [confirmModal, setFirmModal] = useRecoilState(confirmState);
    const navigate = useNavigate();
    if (props.type === 'confirm') {
        text = '글이 등록되었습니다';
    } else if (props.type === 'edit') {
        text = '글 수정이 완료되었습니다.';
    } else if (props.type === 'fail') {
        text = '제목이나 기록을 작성 해주세요';
    } else if (props.type === 'error') {
        text = '업로드에 실패했습니다.';
    } else {
        text = '';
    }
    const ModalConfirm = () => {
        setFirmModal(false);
        if (props.type !== 'fail') {
            setModal(false);
        }
        if (props.type !== 'error') {
            setModal(false);
        }
        if (props.page === 'write') {
            navigate('/home');
        }
    };
    return (
        <ConfirmModal page={props.page}>
            <h3 className="ir">확인모달</h3>
            <ModalBox confirmModal={confirmModal}>
                <ModalMessage>{text}</ModalMessage>
                {/* <ModalButton onClick={ModalConfirm}>취소</ModalButton> */}
                <ModalButton onClick={ModalConfirm} type="button">
                    확인
                </ModalButton>
            </ModalBox>
        </ConfirmModal>
    );
}
