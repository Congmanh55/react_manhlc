import React, {useEffect} from 'react';
import './Item-2.css';
import sp1 from '../../../Image/trà xanh.jpg';
import sp2 from '../../../Image/Sản phẩm 2.png';
import sp3 from '../../../Image/Sản phẩm 3.png';
import sp4 from '../../../Image/Sản phẩm 4.png';
import sp5 from '../../../Image/việt quất.jpg';
import sp6 from '../../../Image/việt quất2.jpg';
import sp7 from '../../../Image/Red velvet 1.png';
import sp8 from '../../../Image/Red velvet 2.png';
import sp9 from '../../../Image/Red velvet 3.png';
import sp10 from '../../../Image/Red velvet 4.png';
import sp11 from '../../../Image/bánh tráng miệng.jpg';
import sp12 from '../../../Image/bánh khô.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/Context';

const Item = () => {
    const { handleIcon } = useAuth();
    const navigate = useNavigate()

    const imgData = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12];
    const randomImgData = imgData[Math.floor(Math.random() * imgData.length-1)];
    const handleClickIcon = () => {
        handleIcon();
    }

    const handleClick = () => {
        navigate('/product/detail')
    }


    return (
        <div>
            <div className="img-end">
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh trà xanh</h2>
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
                                <h2 style={{color:'#DE1313'}}>49.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 2.5k</div>
                                <div style={{alignItems:'end'}} >
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

                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh bông lan</h2>
                    </div>
                    <div className="item-pro">
                        <div className="item-pro-1">
                            <div style={{textAlign:'left'}}>
                                <div style={{fontSize:'14px'}}>
                                    5.0
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                </div>
                                <h2 style={{color:'#DE1313'}}>12.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 3.9k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh quế</h2>
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
                                <h2 style={{color:'#DE1313'}}>30.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 1.5k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh donus dâu</h2>
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
                                <h2 style={{color:'#DE1313'}}>25.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 4.5k</div>
                                <div style={{alignItems:'end'}} >
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

            <div className="img-end">
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh sữa chua</h2>
                    </div>
                    <div className="item-pro">
                        <div className="item-pro-1">
                            <div style={{textAlign:'left'}}>
                                <div style={{fontSize:'14px'}}>
                                    5.0
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                </div>
                                <h2 style={{color:'#DE1313'}}>40.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 3.1k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh việt quất</h2>
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
                                <h2 style={{color:'#DE1313'}}>35.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 2.2k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh cam</h2>
                    </div>
                    <div className="item-pro">
                        <div className="item-pro-1">
                            <div style={{textAlign:'left'}}>
                                <div style={{fontSize:'14px'}}>
                                    5.0
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                </div>
                                <h2 style={{color:'#DE1313'}}>40.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 2.9k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh kem dâu</h2>
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
                                <h2 style={{color:'#DE1313'}}>35.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 4.5k</div>
                                <div style={{alignItems:'end'}} >
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

            <div className="img-end">
            <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh sữa chua</h2>
                    </div>
                    <div className="item-pro">
                        <div className="item-pro-1">
                            <div style={{textAlign:'left'}}>
                                <div style={{fontSize:'14px'}}>
                                    5.0
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                </div>
                                <h2 style={{color:'#DE1313'}}>40.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 3.1k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh việt quất</h2>
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
                                <h2 style={{color:'#DE1313'}}>35.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 2.2k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh cam</h2>
                    </div>
                    <div className="item-pro">
                        <div className="item-pro-1">
                            <div style={{textAlign:'left'}}>
                                <div style={{fontSize:'14px'}}>
                                    5.0
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                </div>
                                <h2 style={{color:'#DE1313'}}>40.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 2.9k</div>
                                <div style={{alignItems:'end'}} >
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
                <div className="sptt" >
                    <div className='sp-all' onClick={()=> handleClick()}>
                        <img src={imgData[Math.floor(Math.random() * imgData.length)]} className="sp" />
                        <h2 className='item-h2'>Bánh kem dâu</h2>
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
                                <h2 style={{color:'#DE1313'}}>35.000đ</h2>
                            </div>
                            <div style={{textAlign:'right', fontSize:'14px'}}>
                                <div>Đã bán 4.5k</div>
                                <div style={{alignItems:'end'}} >
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
        </div>
    )
}

export default Item;