import './Payment.css';
import React, {useEffect, useState} from 'react';
import access from '../../Image/Thanh toán thành công.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Context';

const Payment = () => {
    const {handleBackIcon} = useAuth()
    const [ischeck, setIsCheck] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
        // clickIcon = false;
    }, []);
    // useEffect(() => {
    //     clickIcon = ischeck;
    // }, []);

    const handleClick1 = () => {
        navigate('/')
        handleBackIcon();
    }

    const handleClick2 = () => {
        navigate('/order')
    }
    return (
        <div className='backgr'>
            <div className='contai'>
                <div className='hienthi'>
                    <div className='haha'>
                        <img src={access}/>
                    </div>
                    <div className='content'>
                        Sweet Cakes sẽ gọi điện xác nhận đơn hàng đến bạn
                        <br/>
                        trong thời gian sớm nhất!
                    </div>
                    <div className='infomation'>
                        <div>
                            Mã đơn:  AAZ052025
                        </div>
                        <div className='detail'>
                            <div className='detail-left'>
                                <p>Người đặt:</p>
                                <p>Số điện thoại:</p>
                                <p>Địa chỉ nhận hàng:</p>
                            </div>
                            <div className='detail-right'>
                                <p>Hà Thu Trang</p>
                                <p>0345 876 123</p>
                                <p>37 Phạm Hùng, Cầu Giay, Hà Nội</p>
                            </div>
                        </div>
                        <div className='linee'></div>
                        <div className='detail'>
                            <div className='detail-left'>
                                <p>Phương thức thanh toán:</p>
                                <p>Tổng giá trị đơn hàng:</p>
                            </div>
                            <div className='detail-right'>
                                <p>Tiền mặt</p>
                                <p style={{color: '#DE1313', fontWeight:'bold'}}>300.000đ</p>
                            </div>
                        </div>
                        <div className='button11'>
                            <button className='button-11' onClick={() => handleClick1()}>
                                <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}/>
                                Trở về màn hình chính
                            </button>
                            <button className='button-21' onClick={() => handleClick2()}>
                                Chi tiết đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Payment;