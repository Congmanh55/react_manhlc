import React, {useState, useEffect} from "react";
import './CartCheckout.css';
import banh_1 from '../../Image/Sản phẩm 2.png';
import banh_2 from '../../Image/Sản phẩm 3.png';
import banh_3 from '../../Image/Sản phẩm 4.png';
import vietcom from '../../Image/logo-vietcombank.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash, faShoppingCart, faArrowLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";
import ModalConfirm from "../Modal/ModalConfirm";
import ModalPassword from "../Modal/ModalPassword";

const CartCheckout = () => {
    const {loggedIn, handleRouterUrl} = useAuth();
    const navigate = useNavigate()

    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
    const [isShowModalPassword, setIsShowModalPassword] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [bank, setBank] = useState('1');
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [number3, setNumber3] = useState(1);
    var sum1 = 15*number1;
    var sum2 = 85*number2;
    var sum3 = 50*number3;
    var sum = sum1+sum2+sum3;
    var sumAll = sum + 20;

    const handleCloseConfirm = () => {
        setIsShowModalConfirm(false);
        setIsShowModalPassword(false);
    }
    const handleConfirm = () => {
        if (paymentMethod === 'cash') {
            setIsShowModalConfirm(false);
            navigate('/payment');
        }else {
            setIsShowModalConfirm(false);
            setIsShowModalPassword(true);
        }
    }

    const handleClickBank = (tab) => {
        setBank(tab)
    }

    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    const handleClick1 = () => {
        navigate('/cart');
    }
    const handleClick2 = async () => {
            if(loggedIn.loggedIn === false) {
                const fullUrl = window.location.href.substring(21);//lấy URL và loại 20 kis tự đầu
                handleRouterUrl(fullUrl);
                alert('Vui lòng đăng nhập để tiếp tục')
                navigate('/login')
    
                // const historyUrl = JSON.parse(localStorage.getItem('fullUrl'));
                // console.log(fullUrl)
            }else {
                setIsShowModalConfirm(true);
                // navigate('/payment')
            }
    }
  
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

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
    console.log('checkcart', isShowModalPassword);
    return (
        <div className='backg'>
            
            <div className='comp'>
                <div className="title">THANH TOÁN GIỎ HÀNG</div>
                <div className="infor-1">
                    <div className="details-1">
                        <div className="div-1">
                            THÔNG TIN GIAO HÀNG
                        </div>
                        <div className="div-2">
                            <div className="div-21">
                                <div>Họ và tên: Trần Khánh Huyền</div>
                                <div>Số điện thoại: 0333 276 899</div>
                                <div>Địa chỉ: 22 Phạm Hùng - Cầu Giay - Hà Nội</div>
                            </div>
                            <div className="div-22">
                                <div className="div-221">Mặc định</div>
                            </div>
                            <div className="div-23">
                                <FontAwesomeIcon icon={faPen} className="row-icon1" style={{color: 'black'}}/>
                                <FontAwesomeIcon icon={faTrash} className="row-icon2"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='infor'>
                    <div className='content'>
                        <div className="details">
                            <table>
                                <tr className="header">
                                    <th style={{width:'40%'}}>Sản phẩm</th>
                                    <th style={{width:'12%'}}>Đơn giá</th>
                                    <th style={{width:'15%'}}>Số lượng</th>
                                    <th style={{width:'15%'}}>Thành tiền</th>
                                    <th style={{width:'9%'}}></th>
                                </tr>
                                <tr className="row">
                                    <td className="row-1">
                                        <img src={banh_1} style={{padding:'0'}}/>
                                        <p style={{padding:'15px'}}>Bánh cup cake dâu</p>
                                    </td>
                                    <td>15.000đ</td>
                                    <td>
                                        <div className="row-button">
                                            <div className="div-row">
                                                <FontAwesomeIcon icon={faMinus} onClick={handleClickMinus} style={{cursor:'pointer'}}/>
                                                <p style={{padding: '0 15px'}}>{number1}</p>
                                                <FontAwesomeIcon icon={faPlus} onClick={handleClickPlus} style={{cursor:'pointer'}}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum1}.000đ</td>
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
                                        <div className="row-button">
                                            <FontAwesomeIcon icon={faMinus} onClick={handleMinus2} style={{cursor:'pointer'}}/>
                                            <p style={{padding: '0 15px'}}>{number2}</p>
                                            <FontAwesomeIcon icon={faPlus} onClick={handlePlus2} style={{cursor:'pointer'}}/>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum2}.000đ</td>
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
                                        <div className="row-button">
                                            <FontAwesomeIcon icon={faMinus} onClick={handleMinus3} style={{cursor:'pointer'}}/>
                                            <p style={{padding: '0 15px'}}>{number3}</p>
                                            <FontAwesomeIcon icon={faPlus} onClick={handlePlus3} style={{cursor:'pointer'}}/>
                                        </div>
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{sum3}.000đ</td>
                                    <td>
                                        {/* <FontAwesomeIcon icon={faShoppingCart} className="row-icon1"/>
                                        <FontAwesomeIcon icon={faTrash} className="row-icon2"/> */}
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>TỔNG GIÁ TRỊ ĐƠN HÀNG</td>
                                    <td></td>
                                    <td></td>
                                    <td>330.000đ</td>
                                    <td></td>
                                </tr> */}
                               
                            </table>

                            <h2 style={{textAlign:'left'}}>Phương thức thanh toán</h2>
                            <div className="payment">
                                <div className="payment-left">
                                    <p style={{display: 'flex', alignItems:'center'}}>
                                        <input
                                        type="radio"
                                        value="cash"
                                        className="input-pay"
                                        checked={paymentMethod === 'cash'}
                                        onChange={handlePaymentMethodChange}
                                        />
                                        Thanh toán bằng tiền mặt
                                    </p>

                                    <p style={{display: 'flex', alignItems:'center'}}>
                                        <input
                                        type="radio"
                                        value="bankTransfer"
                                        className="input-pay"
                                        checked={paymentMethod === 'bankTransfer'}
                                        onChange={handlePaymentMethodChange}
                                        />
                                        Thanh toán qua chuyển khoản ngân hàng
                                    </p>

                                    {paymentMethod === 'bankTransfer' && (
                                        <div>
                                            <div className="vietcom-1" style={bank === '1' ? {color:'#F97525', border: '1px solid #F97525'} : {}} onClick={() => handleClickBank('1')}>
                                                <img src={vietcom} className="vc-img"/>
                                                <div style={{width:'200px'}}>Vietcombank</div>
                                                <div>*7621</div>
                                            </div>
                                            <br/>
                                            <div className="vietcom-1" style={bank === '2' ? {color:'#F97525', border: '1px solid #F97525'} : {}} onClick={() => handleClickBank('2')}>
                                                <img src={vietcom} className="vc-img"/>
                                                <div style={{width:'200px'}}>Vietcombank</div>
                                                <div>*7892</div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="payment-right">
                                    <div className="right-1">
                                        <div className="pay-div">Tổng giá trị đơn hàng</div>
                                        <div className="pay-div">Phí vận chuyển</div>
                                        <div className="pay-div-1"></div>
                                        <div className="pay-div" style={{paddingTop: '10px'}}>TỔNG THANH TOÁN</div>
                                    </div>
                                    <div className="right-2">
                                        <div className="pay-div" >{sum}.000đ</div>
                                        <div className="pay-div">20.000đ</div>
                                        <div className="pay-div-1"></div>
                                        <div className="pay-div" style={{paddingTop: '10px', color:'#DE1313'}}>{sumAll}.000đ</div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='button'>
                                <button className='button-1' onClick={() => handleClick1()}>
                                    <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}/>
                                    Trở lại
                                </button>
                                <button className='button-2' onClick={() => handleClick2()}>
                                    Thanh toán
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

            <ModalConfirm
                isShow = {isShowModalConfirm}
                handleCloseConfirm = {handleCloseConfirm}
                handleConfirm = {handleConfirm}
            />

            <ModalPassword
                isShow = {isShowModalPassword}
                handleCloseConfirm = {handleCloseConfirm}
            />

        </div>
    )
}

export default CartCheckout;