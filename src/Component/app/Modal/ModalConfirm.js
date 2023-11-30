import React from "react";
import ReactModal from "react-modal";
import './Modal.css';

const ModalConfirm  = (props) => {

    return (
        <ReactModal
            isOpen = {props.isShow}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                  },
                  content: {
                    width: '40%',
                    height: '50%',
                    margin: 'auto',
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  },
            }}
        >
            <div className="modal">
                <div className="modal-close-button">
                    <button type="button" onClick={props.handleCloseConfirm} className='close-button'>&times;</button>
                </div>
                <div className="modal-content">
                    <h2 className="hh2">BẠN CHẮC CHẮN MUỐN THANH TOÁN ĐƠN HÀNG</h2>
                    <div className="bt">
                        <button onClick={props.handleConfirm} className="button-y">YES</button>
                        <button onClick={props.handleCloseConfirm} className="button-n">NO</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default ModalConfirm;