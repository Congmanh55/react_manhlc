import React, { useEffect, useState } from "react";
import './Cart.css';
import cart from '../../Image/Add cart.png';
import banh_1 from '../../Image/Sản phẩm 2.png';
import banh_2 from '../../Image/Sản phẩm 3.png';
import banh_3 from '../../Image/Sản phẩm 4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";

const Cart = () => {
    const navigate = useNavigate();
    const {handleIcon} = useAuth();

    const [input, setInput] = useState('Cho Sweet cake biết bạn cần lưu ý gì với đơn hàng nhé!')
    const [isInput, setIsInput] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    const handleClick = () => {
        navigate('/cart/checkout')
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

    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [number3, setNumber3] = useState(1);
    var sum1 = 15*number1;
    var sum2 = 85*number2;
    var sum3 = 50*number3;
    var sum = sum1+sum2+sum3;
    var sumAll = sum + 20;

    const handleCart = () => {
        navigate('/product')
    }

    const handleBack = () => {
        navigate('/product')
        handleIcon();
    }
    const handleClickMinus = () => {
        if(number1 >1 ) {
            setNumber1(number1-1);
        }
    }

    const handleClickPlus = () => {
        if(number1 >0) {
            setNumber1(number1+1);
        }
    }
    const handleMinus2 = () => {
        if(number2 >1 ) {
            setNumber2(number2-1);
        }
    }

    const handlePlus2 = () => {
        if(number2 >0) {
            setNumber2(number2+1);
        }
    }
    const handleMinus3 = () => {
        if(number3 >1 ) {
            setNumber3(number3-1);
        }
    }

    const handlePlus3 = () => {
        if(number3 >0) {
            setNumber3(number3+1);
        }
    }
    return (
        <div className='backg'>
            
            <div className='comp'>
                <div className="title">GIỎ HÀNG CỦA BẠN</div>
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
                                        <div className="row-button">
                                            <FontAwesomeIcon icon={faMinus} style={{cursor:'pointer'}} onClick={handleClickMinus}/>
                                            <p style={{padding: '0 15px'}}>{number1}</p>
                                            <FontAwesomeIcon icon={faPlus} style={{cursor:'pointer'}} onClick={handleClickPlus}/>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum1}.000đ</td>
                                    <td>
                                        <div style={{display:'flex', alignItems:'center'}}>
                                        <img src={cart} onClick={handleCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_2} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh kem dâu tây</p>
                                    </td>
                                    <td>85.000đ</td>
                                    <td>
                                        <div className="row-button">
                                            <FontAwesomeIcon icon={faMinus} style={{cursor:'pointer'}} onClick={handleMinus2}/>
                                            <p style={{padding: '0 15px'}}>{number2}</p>
                                            <FontAwesomeIcon icon={faPlus} style={{cursor:'pointer'}} onClick={handlePlus2}/>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum2}.000đ</td>
                                    <td>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <img src={cart} onClick={handleCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_3} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh vị cam</p>
                                    </td>
                                    <td>50.000đ</td>
                                    <td>
                                        <div className="row-button">
                                            <div className="div-row">
                                                <FontAwesomeIcon icon={faMinus} style={{cursor:'pointer'}} onClick={handleMinus3}/>
                                                <p style={{padding: '0 15px'}}>{number3}</p>
                                                <FontAwesomeIcon icon={faPlus} style={{cursor:'pointer'}} onClick={handlePlus3}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum3}.000đ</td>
                                    <td>
                                        <div style={{display:'flex', alignItems:'center'}}>
                                        <img src={cart} onClick={handleCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:'bold'}}>TỔNG GIÁ TRỊ ĐƠN HÀNG</td>
                                    <td></td>
                                    <td></td>
                                    <td style={{color:'#DE1313', fontWeight:'bold'}}>{sum}.000đ</td>
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
                <div className="payyy">
                    <div onClick={handleBack} className="pays-back">
                        <button 
                            className="pay-button" 
                            onClick={() => handleClick()}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}/>
                            Trở lại
                        </button>
                    </div>
                    <div className="pay-cart">
                        <button 
                            className="pays-button" 
                            onClick={() => handleClick()}
                        >
                            Thanh toán
                        </button>
                    </div>

                </div>

                
            </div>

        </div>

    )
}

export default Cart;