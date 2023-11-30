import React, {useEffect, useState} from "react";
import './Order.css';
import banh_1 from '../../Image/Sản phẩm 2.png';
import banh_2 from '../../Image/Sản phẩm 3.png';
import banh_3 from '../../Image/Sản phẩm 4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash, faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";

const Order = () => {
    const navigate = useNavigate()
    const {handleBackIcon} = useAuth()

    const [input, setInput] = useState('Cho Sweet cake biết bạn cần lưu ý gì với đơn hàng nhé!')
    const [isInput, setIsInput] = useState(false);
    const [value, setValue] = useState('');


    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);
    const handleGoBack = () => {
        navigate('/');
        handleBackIcon(false);
    }

    const handleBlurInput = () => {
        if(value === '') {
            setInput('Cho Sweet cake biết bạn cần lưu ý gì với đơn hàng nhé!');
        }else {
            setInput(value);
        }

        setIsInput(false)
    }
    const handleFocusInput = () => {
        if(value === '') {
            setInput('');
        }else {
            setInput(value);
        }
        setIsInput(true);
    }
    const handleChange = (e) => {
        setValue(e.target.innerHTML)
    }


    return (
        <div className='backg'>
            
            <div className='comp'>
                <div className="title">ĐƠN HÀNG AAZ052025</div>
                <div className='infor'>
                    <div className='content'>
                        <div className="details">
                            <table>
                                <tr className="header">
                                    <th style={{width:'40%'}}>Sản phẩm</th>
                                    <th style={{width:'12%'}}>Đơn giá</th>
                                    <th style={{width:'15%'}}>Số lượng</th>
                                    <th style={{width:'15%'}}>Thành tiền</th>
                                    <th style={{width:'18%'}}></th>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_1} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh cup cake dâu</p>
                                    </td>
                                    <td>15.000đ</td>
                                    <td>
                                        <div className="row-button-order">
                                            <div className="div-row">
                                                
                                                <p style={{padding: '0 15px'}}>6</p>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>60.000đ</td>
                                    <td>
                                        {/* <FontAwesomeIcon icon={faShoppingCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/> */}
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_2} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh kem dâu tây</p>
                                    </td>
                                    <td>85.000đ</td>
                                    <td>
                                        <div className="row-button-order">
                                            
                                            <p style={{padding: '0 15px'}}>1</p>
                                            
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>85.000đ</td>
                                    <td>
                                        {/* <FontAwesomeIcon icon={faShoppingCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/> */}
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_3} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh vị cam</p>
                                    </td>
                                    <td>50.000đ</td>
                                    <td>
                                        <div className="row-button-order">
                                            
                                            <p style={{padding: '0 15px'}}>3</p>
                                            
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>150.000đ</td>
                                    <td>
                                        {/* <FontAwesomeIcon icon={faShoppingCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:'bold'}}>TỔNG GIÁ TRỊ ĐƠN HÀNG</td>
                                    <td></td>
                                    <td></td>
                                    <td style={{fontWeight:'bold', color:'#DE1313'}}>330.000đ</td>
                                    <td></td>
                                </tr>
                               
                            </table>

                            <div className="note">
                                <p>Ghi chú</p>
                                <div 
                                    contenteditable="true" 
                                    placeholder="Nhập văn bản..."
                                    className="note-input-111"
                                    style={isInput ? {color:'black'} : {color:'#c4c4c4'}}
                                    onBlur = {() => handleBlurInput()}
                                    onFocus = {() => handleFocusInput()}
                                    onInput={handleChange}
                                >
                                    {input}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="pay-cart">
                    <button className="pay-button" onClick={() => handleGoBack()}>
                        <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}/>
                        Trở lại
                    </button>
                </div>
                
            </div>

        </div>
    )
}

export default Order;