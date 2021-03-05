import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import Swiper from 'react-id-swiper';

// css
import "swiper/swiper.scss";


// img
import arrowImg from '../../assets/images/btn-arrow-black.svg'
import arrowRight from '../../assets/images/btn-arrow-green.svg'
import slide1 from '../../assets/images/dynamic/n1.jpg'
import slide2 from '../../assets/images/dynamic/n2.jpg'
import slide3 from '../../assets/images/dynamic/n3.jpg'
import RightIcon from "../../assets/images/navRightBlack.svg";
import LeftIcon from "../../assets/images/navLeftBlack.svg";


function NewsEvents() {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        speed:1500,
        autoplay: {
            delay: 5500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    };


    return (

        <StyledNewsEvents className="pt110 pb110">
            <Container>
                <p className="subTitle">News & events</p>
            </Container>

            <Container className="NewsEvents-slider">
                <Swiper  {...params}>

                    <div className="NewsEvents-slider__single">
                        <div className="NewsEvents-slider__single__content">
                            <h4>News</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                            <a href="#"><span>Read more <img src={arrowImg} alt=""/></span></a>
                        </div>

                        <div className="NewsEvents-slider__single__img">
                            <a href="#"></a>
                            <img src={slide1} alt=""/>
                        </div>
                    </div>

                    <div className="NewsEvents-slider__single">
                        <div className="NewsEvents-slider__single__content">
                            <h4>events</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                            <a href="#"><span>Read more <img src={arrowImg} alt=""/></span></a>
                        </div>

                        <div className="NewsEvents-slider__single__img">
                            <a href="#"></a>
                            <img src={slide2} alt=""/>
                        </div>
                    </div>

                    <div className="NewsEvents-slider__single">
                        <div className="NewsEvents-slider__single__content">
                            <h4>News</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                            <a href="#"><span>Read more <img src={arrowImg} alt=""/></span></a>
                        </div>

                        <div className="NewsEvents-slider__single__img">
                            <a href="#"></a>
                            <img src={slide3} alt=""/>
                        </div>
                    </div>

                    <div className="NewsEvents-slider__single">
                        <div className="NewsEvents-slider__single__content">
                            <h4>News</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                            <a href="#"><span>Read more <img src={arrowImg} alt=""/></span></a>
                        </div>

                        <div className="NewsEvents-slider__single__img">
                            <a href="#"></a>
                            <img src={slide1} alt=""/>
                        </div>
                    </div>

                    <div className="NewsEvents-slider__single">
                        <div className="NewsEvents-slider__single__content">
                            <h4>events</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                            <a href="#"><span>Read more <img src={arrowImg} alt=""/></span></a>
                        </div>

                        <div className="NewsEvents-slider__single__img">
                            <a href="#"></a>
                            <img src={slide2} alt=""/>
                        </div>
                    </div>






                </Swiper>


                <div className="NewsEvents-slider__bottom">
                    <a href="#" className="dcBtn"><span>explore <img src={arrowRight} alt=""/> </span></a>
                </div>
            </Container>
        </StyledNewsEvents>

    )


}


const StyledNewsEvents = styled.div`
   background-color: rgba(0,0,0,0.02) ;
   .subTitle{
    margin-bottom: 118px;
   }
   .NewsEvents-slider{
       &__single{
           &__content{
               h4{
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 500;
                line-height: 21px;
                margin: 0 0 20px 0;
                color: rgba(9,32,59,0.50);
              }
              p{
                font-size: 20px;
                font-weight: bold;
                line-height: 30px;
                margin-bottom: 40px;
              }
              a{
                font-size: 12px;
                letter-spacing: 1.5px;
                color: rgba(9,32,59,0.5);
                transition:all .3s ease;
                line-height: 18px;
                img{
                  margin-left: 10px;
                  transition:transform .4s ease;
                }
                &:hover{
                color: ${hover};
                letter-spacing: 3px;
                img{
                  transform: translateX(10px);
                  
                }
                  
                }
              }
           }
           
            &__img{
                padding-top: 67.57%;
                position: relative;
                overflow: hidden;
                margin-top: 40px;
                a{
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  z-index: 3;
                }
                img{
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  transform: scale(1.01);
                  top: 0;
                  left: 0;
                  transition:all 2s ease;
                  
                }
                &:hover{
                  img{
                    transform: scale(1.05);
                    filter:contrast(140%);
                  }
                }
           }
       }
      
    &__bottom{
     margin-top: -50px;
     .dcBtn{
       
     } 
    }   
    
   }
   
  .swiper-button-next{
       position: absolute;
        right: 0px;
        bottom: 0px;
        margin: auto;
        z-index: 3;
       
        height: 50px;
        width: 50px;
        background-image: url(${RightIcon});
        background-position: center;
        background-size: contain;
         &:focus{
          outline:none;
        }
    }
    .swiper-button-prev{
       position: absolute;
        right: 60px;
        bottom: 0px;
        margin: auto;
        z-index: 3;
        height: 50px;
        width: 50px;
        background-image: url(${LeftIcon});
        background-size: contain;
        &:focus{
          outline:none;
        }
    }
   .swiper-wrapper{
        margin-bottom: 150px;
   }
  
  
`;





export default NewsEvents;

