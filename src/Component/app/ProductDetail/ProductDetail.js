import React, {useEffect, useState} from "react";
import './ProductDetail.css';
import banner from '../../Image/Banner.png';
import velvet1 from '../../Image/Red velvet 1.png';
import velvet2 from '../../Image/Red velvet 2.png';
import velvet3 from '../../Image/Red velvet 3.png';
import velvet4 from '../../Image/Red velvet 4.png';
import sp1 from '../../Image/Sản phẩm 1.png';
import sp2 from '../../Image/Sản phẩm 2.png';
import sp3 from '../../Image/Sản phẩm 3.png';
import sp4 from '../../Image/Sản phẩm 4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faStar, faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";

const ProductDetail = () => {
    const { handleIcon, handleRouterUrl } = useAuth();

    const loggedIn = useAuth();
    console.log('prouductDetail', loggedIn);

    const [number, setNumber] = useState(1);
    const sum = number * 55;

    const navigate = useNavigate();
    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    const handleClick1 = () => {
        // if(loggedIn.loggedIn === false) {
        //     alert('Vui lòng đăng nhập để tiếp tục')
        // }else {
            handleIcon()
        // }
    }


    const handleClick2 = () => {
        if(loggedIn.loggedIn === false) {
            const fullUrl = window.location.href.substring(21);//lấy URL và loại 20 kis tự đầu
            handleRouterUrl(fullUrl);
            alert('Vui lòng đăng nhập để tiếp tục')
            navigate('/login')

            // const historyUrl = JSON.parse(localStorage.getItem('fullUrl'));
            // console.log(fullUrl)
        }else {
            navigate('/cart/checkout')
        }
    }

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleClickIcon = () => {
        handleIcon();
    }

    const handleClickImg = () => {
        window.scrollTo(0, 0);
    }
    const handleClickMinus = () => {
        if(number >1 ) {
            setNumber(number-1);
        }
    }

    const handleClickPlus = () => {
        if(number >0) {
            setNumber(number+1);
        }
    }

    return (
        <div className="body-product">
            <div className="body-content-product">
                <img src={banner} className="banner"/>
                <h1>CHI TIẾT SẢN PHẨM</h1>
                <div className="body-3">
                    <div className="img-product">
                        <div>
                            <img src={velvet1} className="velvet1"/>
                        </div>
                        <div className="img-item">
                            <img src={velvet2}/>
                            <img src={velvet3} className="velvet3"/>
                            <img src={velvet4}/>
                        </div>
                    </div>
                    <div className="information">
                        <div style={{fontWeight:'bold', fontSize:'20px'}}>BÁNH RED VELVET</div>
                        <p style={{fontWeight:'bold', fontSize:'18px', color:'red'}}>{sum}.000đ</p>
                        <p style={{fontWeight:'bold'}}>Số lượng</p>
                        <div className="inf-button">
                            <FontAwesomeIcon icon={faMinus} onClick={handleClickMinus} style={{cursor:'pointer'}}/>
                            <p style={{padding: '0 15px'}}>{number}</p>
                            <FontAwesomeIcon icon={faPlus} onClick={handleClickPlus} style={{cursor:'pointer'}}/>
                        </div>
                        <div className="bt">
                        <p style={{textAlign:'left'}}>
                            <button className="bt1-btt" onClick={() => handleClick1()}>Thêm vào giỏ hàng</button>
                            <button className="bt2-btt" onClick={() => handleClick2()}>Mua ngay</button>
                        </p>
                        </div>
                        <p style={{fontWeight:'bold'}}>Mô tả</p>
                        <ul>
                            <li>
                                Bánh Red Velvet đang trở thành xu hướng và
                                được nhiều người lựa chọn không chỉ bởi vẻ bề ngoài
                                bắt mắt mà còn bởi hương bị thơm ngon khó cưỡng
                            </li>
                        </ul>
                        <p style={{fontWeight:'bold'}}>Đặc điểm bánh Red Velvet</p>
                        <ul>
                            <li>
                                Bánh red velvet có đặc điểm nổi bật nhất là có nhiều lớp. Bánh làm từ 3 lớp gato đỏ xen lẫn 3 lớp kem tươi. Bên ngoài bánh phủ 1 lớp kem tươi rắc bột đỏ. Màu đỏ nhung của bánh chính là điểm nhấn, kết hợp với lớp kem trắng mịn phủ bên ngoài càng làm cho chiếc bánh nổi bật hơn bao giờ hết. Sắc đỏ được hình thành do sự tương tác của các nguyên liệu có trong thành phần, cùng một chút màu chiết xuất từ thực vật để tăng thêm độ rực rỡ.
                            </li>
                            <li>    
                                Màu sắc không chỉ lộng lẫy mà kết cấu bánh phải đủ độ ẩm mượt, mềm mịn như nhung, thoảng hương cacao nồng nàn
                            </li>  
                            <li>  
                                Nguyên liệu làm bánh red velvet cũng khá đơn giản: trứng gà, bột mì đa dụng, màu thực phẩm, bơ lạt, đường, nước tinh khiết.
                            </li>
                        </ul>
                        <p style={{fontWeight:'bold'}}>Hương vị red velvet cake</p>
                        <ul>
                            <li>
                                Hương vị đặc trưng nhất của bánh red velvet là ở những lớp kem tươi béo ngậy thơm lừng “khiêu khích” vị giác của bạn, kết hợp với đó là hương vị chocolate có chút đắng chắc chắn sẽ khiến bạn thích mê.
                            </li>
                        </ul>
                        <p style={{fontWeight:'bold'}}>Hướng dẫn bảo quản</p>
                        <ul>
                            <li>Hạn sử dụng: 4 ngày kể từ ngày sản xuất</li>
                            <li>Bảo quản: 2 - 5 độ</li>
                        </ul>
                    </div>
                </div>

                <div >
                    <div className="vb">SẢN PHẨM TƯƠNG TỰ</div>
                    <div className="img-end">
                        <div className="sptt">
                            <div className="sp-all" onClick={() => handleClickImg()}>
                                <img src={sp4} className="sp"/>
                                <h2 style={{textAlign:'left', paddingLeft:'20px'}}>Bánh donus dâu</h2>
                            </div>       
                            <div className="item-pro">
                                <div className="item-pro-1">
                                    <div style={{textAlign:'left'}}>
                                        <div style={{fontSize:'14px'}}>
                                            4.0
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star-0"/>
                                        </div>
                                        <h2>49.000đ</h2>
                                    </div>
                                    <div style={{textAlign:'right', fontSize:'14px'}}>
                                        <div>Đã bán 2.5k</div>
                                        <div style={{alignItems:'end'}} className="icon">
                                        <FontAwesomeIcon 
                                         icon={faShoppingCart} 
                                        className='icon-cart' 
                                        style={{margin:'20px 0px', fontSize:'20px' }}
                                        onClick={() => handleClickIcon()}
                                        />                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sptt">
                            <div className="sp-all" onClick={() => handleClickImg()}>
                                <img src={sp2} className="sp"/>
                                <h2 style={{textAlign:'left', paddingLeft:'20px'}}>Bánh donus dâu</h2>
                            </div>       
                            <div className="item-pro">
                                <div className="item-pro-1">
                                    <div style={{textAlign:'left'}}>
                                        <div style={{fontSize:'14px'}}>
                                            4.0
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star-0"/>
                                        </div>
                                        <h2>45.000đ</h2>
                                    </div>
                                    <div style={{textAlign:'right', fontSize:'14px'}}>
                                        <div>Đã bán 2.2k</div>
                                        <div style={{alignItems:'end'}} className="icon">
                                        <FontAwesomeIcon 
                                         icon={faShoppingCart} 
                                        className='icon-cart' 
                                        style={{margin:'20px 0px', fontSize:'20px' }}
                                        onClick={() => handleClickIcon()}
                                        />                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sptt">
                            <div className="sp-all" onClick={() => handleClickImg()}>
                                <img src={sp3} className="sp"/>
                                <h2 style={{textAlign:'left', paddingLeft:'20px'}}>Bánh quế</h2>
                            </div>       
                            <div className="item-pro">
                                <div className="item-pro-1">
                                    <div style={{textAlign:'left'}}>
                                        <div style={{fontSize:'14px'}}>
                                            4.0
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star-0"/>
                                        </div>
                                        <h2>40.000đ</h2>
                                    </div>
                                    <div style={{textAlign:'right', fontSize:'14px'}}>
                                        <div>Đã bán 3.1k</div>
                                        <div style={{alignItems:'end'}} className="icon">
                                        <FontAwesomeIcon 
                                         icon={faShoppingCart} 
                                        className='icon-cart' 
                                        style={{margin:'20px 0px', fontSize:'20px' }}
                                        onClick={() => handleClickIcon()}
                                        />                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sptt">
                            <div className="sp-all" onClick={() => handleClickImg()}>
                                <img src={sp4} className="sp"/>
                                <h2 style={{textAlign:'left', paddingLeft:'20px'}}>Bánh donus dâu</h2>
                            </div>       
                            <div className="item-pro">
                                <div className="item-pro-1">
                                    <div style={{textAlign:'left'}}>
                                        <div style={{fontSize:'14px'}}>
                                            4.0
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star"/>
                                            <FontAwesomeIcon icon={faStar} className="star-0"/>
                                        </div>
                                        <h2>49.000đ</h2>
                                    </div>
                                    <div style={{textAlign:'right', fontSize:'14px'}}>
                                        <div>Đã bán 2.5k</div>
                                        <div style={{alignItems:'end'}} className="icon">
                                        <FontAwesomeIcon 
                                         icon={faShoppingCart} 
                                        className='icon-cart' 
                                        style={{margin:'20px 0px', fontSize:'20px' }}
                                        onClick={() => handleClickIcon()}
                                        />                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <button className='button-back' onClick={() => handleClickBack()}>
                            <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:'10px'}}/>
                            Trở lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;