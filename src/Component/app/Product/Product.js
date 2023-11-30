import React, { useState, useEffect } from "react";
import './Product.css';
import banner from '../../Image/Banner.png';
import Item from "./Item/Item";
import Item_2 from "./Item-2/Item-2"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";
const Product = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {loggedIn} = useAuth();
    const savedLogin = JSON.parse(localStorage.getItem('loggedIn'));
    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     if(!savedLogin) {
    //         navigate('/login');
    //     }
    // },[]);

    const [click, setClick] = useState(false);
    const [check, setCheck] = useState('all')

    const handleClick = (tab) => {
        setCheck(tab)
    }

    return (
        <div className="body-product">
            <div className="body-contents">
                <img src={banner} className="banner"/>
                <div className="titles">
                    <Link to='/product' className="header-title" style={location.pathname==='/product' ? {color:'#F97525', textDecoration:'underline'}:{color:'black'}} onClick={() => handleClick('all')}>
                        Tất cả sản phẩm
                    </Link>
                    <Link to='/product/banh_ngot' className="header-title" style={location.pathname==='/product/banh_ngot' ? {color:'#F97525', textDecoration:'underline'}:{color:'black'}} onClick={() => handleClick('bn')}>
                        Bánh ngọt
                    </Link>
                    <Link to='/product/banh_trang_mieng' className="header-title" style={location.pathname==='/product/banh_trang_mieng' ? {color:'#F97525', textDecoration:'underline'}:{color:'black'}} onClick={() => handleClick('btm')}>
                        Bánh tráng miệng
                    </Link>
                    <Link to='/product/banh_kho' className="header-title" style={location.pathname==='/product/banh_kho' ? {color:'#F97525', textDecoration:'underline'}:{color:'black'}} onClick={() => handleClick('bk')}>
                        Bánh khô
                    </Link >
                </div>

                {
                    location.pathname === '/product' 
                    ?
                    <div>
                        <Item/>
                    </div>
                    :
                    <div>
                        <Item_2/>
                    </div>
                }

                <div>
                    {click===false ?
                    <button style={{width:'150px', height:'40px'}} className="xemthem" onClick={() => setClick(true)}>
                        Xem thêm
                    </button>
                    :
                    <Item/>
                    }
                </div>

            </div>
        </div>
    )
}

export default Product;