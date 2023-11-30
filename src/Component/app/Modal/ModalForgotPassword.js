import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

const ModalForgotPassword = (props) => {

    const [email, setEmail] = useState('');
    const [forgotError, setForgotError] = useState('');

    const handleConfirm = () => {
        if (props.savedUser && props.savedUser.email === email) {
            window.location.reload();
            setForgotError('');
        } else {
            setForgotError('Email không hợp lệ');
        }
    }
    
    return(
        <ReactModal
            isOpen = {props.isShow}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                },
                content: {
                    width: '40%',
                    height: '55%',
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
                    <h2 className="hh2" style={{marginBottom:'0'}}>NHẬP EMAIL ĐỂ LẤY LẠI PASSWORD</h2>
                    <p className="p-content">Nhập lại email và chúng tôi sẽ gửi lại mật khẩu đến email cho bạn</p>
                    <div style={{textAlign:'right'}}>{forgotError && <p style={{margin:'0', color:'red'}}>{forgotError}</p>}</div>
                    <input 
                        placeholder="Nhập email" 
                        className="input-forgot"
                        type="text" 
                        id="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="bt-cf">
                        <button onClick={handleConfirm} className="button-g">GỬI</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default ModalForgotPassword;