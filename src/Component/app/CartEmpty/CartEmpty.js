import './CartEmpty.css';
import group from '../../Image/Cart is empty.png';
import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    const handleClick = () => {
        navigate('/product')
    }

    return(
        <div className='body-cartEmpty'>
            <div className='cartEmpty'>
                <div className='cartEmpty-body'>
                    <div className='cartEmpty-title'>
                        <h2>GIỎ HÀNG CỦA BẠN</h2>
                        <p>Giỏ hàng của bạn đang trống.</p>
                        <p>Hãy quay lại và lấp đầy giỏ hàng nhé!</p>
                    </div>
                    <div className='pay'>
                        <button className='pay-btt' onClick={handleClick}>
                            Mua ngay
                        </button>
                    </div>
                    <div className='cartEmpty-img'>
                        <img src={group}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartEmpty;