import React, {useEffect, useState} from "react";
import ReactModal from "react-modal";
import {useNavigate} from "react-router-dom";
import './Modal.css';

const ModalPassword = (props) => {
    const navigate = useNavigate()

    const [isError, setIsError] = useState(false);
    const [times, setTimes] = useState(5);
    const [condition, setCondition] = useState(false);
    const [pin, setPin] = useState(['', '', '', '', '', '']); // Mảng chứa giá trị của từng ô input
    const defaultPin = ['1', '2', '3', '4', '5', '6']; // Mã PIN mặc định, bạn có thể thay đổi
    const inputRefs = [0, 1, 2, 3, 4, 5].map(() => React.createRef());
  
    const handleInputChange = (index, value) => {
        // Chỉ cho phép nhập số
        if (/^[0-9]*$/.test(value)) {
            const newPin = [...pin];
            newPin[index] = value.slice(0, 1); // Giới hạn chỉ lấy một số đầu tiên
    
            setPin(newPin);
    
            // Di chuyển đến ô input tiếp theo nếu ô hiện tại không rỗng
            if (value !== '' && index < 5) {
                inputRefs[index + 1].current.focus();
                setIsError()
            }
        };
    }
  
    const handleKeyDown = (index, event) => {
      // Di chuyển đến ô input trước đó nếu ô hiện tại rỗng và phím Backspace được nhấn
      if (event.key === 'Backspace' && index > 0 && pin[index] === '') {
        inputRefs[index - 1].current.focus();
      }
    };

    const handleConfirmPassword = () => {
        const enteredPin = pin.join('');
        const isPasswordCorrect = enteredPin === defaultPin.join('');
    
        if (isPasswordCorrect) {
            navigate('/payment');
            setIsError('');
          // Mã PIN đúng, thực hiện bước tiếp theo
        } else {
            setTimes(times-1)
            setIsError(`SAI MÃ PIN. Bạn còn ${times} lần nhập lại`);
            if(times===0) {
                setCondition(true);
            }
        }

    }
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
                    height: '55%',
                    margin: 'auto',
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            },
        }}>
            <div className="modal">
                <div className="modal-close-button">
                    <button type="button" onClick={props.handleCloseConfirm} className='close-button'>&times;</button>
                </div>
                <div className="modal-content">
                    <h2 className="hh2" style={{marginBottom:'0'}}>NHẬP MÃ PIN</h2>
                    {isError && <p style={{ color: 'red' }}>{isError}</p>}
                    <div className="pass">
                        {pin.map((value, index) => (
                            <input
                            className="input-pass"
                            key={index}
                            type="text"
                            value={value}
                            maxLength={1} // Giới hạn số ký tự là 1
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={inputRefs[index]}
                            />
                        ))}
                    </div>
                    <div className="bt-cf">
                        <button onClick={handleConfirmPassword} disabled={condition} className={condition===true ?"button-confirm-dis" : "button-confirm" }>CONFIRM</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default ModalPassword;