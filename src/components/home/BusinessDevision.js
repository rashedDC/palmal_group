import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import Swiper from 'react-id-swiper';

// css
import "swiper/swiper.scss";



// img
import arrowImg from '../../assets/images/btn-arrow-white.svg'
import slides from '../../assets/images/dynamic/business.jpg'
import slide from '../../assets/images/dynamic/slide1.jpg'
import RightIcon from "../../assets/images/navRight.svg";
import LeftIcon from "../../assets/images/navLeft.svg";


function BusinessDivision() {

    const params = {
        // effect: "fade",
        fadeEffect: { crossFade: true },
        speed:1500,
        autoplay: {
            delay: 5500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    };


    return (

        <StyledDivision>
            <Container className="businessTitle">
                <p className="subTitle">Business divisions</p>
            </Container>

            <Swiper  {...params}>



                    <div className="business__single pt110 pb110">
                        <img className="business__single__img" src={slides} alt=""/>

                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <div className="business__single__content">
                                        <h2 className="Title"> Knitting Division</h2>
                                        <p>Our Knitting divisions are well equipped with the latest model of “Pailung”
                                            auto stripe
                                            machines with
                                            6
                                            color facility and “Lisky” circular & flat knitting machines with all
                                            necessary
                                            equipments
                                            to
                                            produce
                                            all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey
                                            & Double
                                            Jersey), Pique,
                                            Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in
                                            different dia,
                                            gauges &
                                            weights. </p>
                                        <a href="#">view all concerns <img src={arrowImg} alt=""/></a>
                                    </div>
                                </Col>

                            </Row>


                        </Container>
                    </div>



                    <div className="business__single pt110 pb110">
                        <img className="business__single__img" src={slide} alt=""/>

                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <div className="business__single__content">
                                        <h2 className="Title"> Knitting Division</h2>
                                        <p>Our Knitting divisions are well equipped with the latest model of “Pailung”
                                            auto stripe
                                            machines with
                                            6
                                            color facility and “Lisky” circular & flat knitting machines with all
                                            necessary
                                            equipments
                                            to
                                            produce
                                            all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey
                                            & Double
                                            Jersey), Pique,
                                            Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in
                                            different dia,
                                            gauges &
                                            weights. </p>
                                        <a href="#">view all concerns <img src={arrowImg} alt=""/></a>
                                    </div>
                                </Col>

                            </Row>


                        </Container>
                    </div>



            </Swiper>

        </StyledDivision>

    )


}


const StyledDivision = styled.div`
    position: relative;
    .businessTitle{
      position: absolute;
      z-index: 3;
      margin: auto;
      left: 0;
      right: 0;
      top: 110px;
    }
    
    .business__single{
      position: relative;
    .container{
      position: relative;
    }
      
      &__img{
         height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        bottom: 0
      }
      
      &__content{
        position: relative;
        z-index: 2;
        margin-top: 100px;
        .Title{
          color: #ffffff;
          margin-bottom: 30px;
        }
        p{
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          &:nth-last-of-type(1){
            margin-bottom: 0;
          }
        }
        a{
           margin-top: 100px;
           display: inline-flex;
           color: #FFF;
           font-size: 12px;
           font-weight: 300;
           letter-spacing: 2px;
           text-transform: uppercase;
           line-height: 24px;
           transition:color .3s ease;
           img{
              margin-left: 20px;
              transition:transform .4s ease;
              height: 25px;
            }
            &:hover{
              color: ${hover};
               img {
                  transform: translateX(10px);
               }
              
            }
        }
      }
      
    }
    
    .goLeft{
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 50px;
        margin: auto;
        height: 50px;
        cursor: pointer;
        right: 123px;
    }
    .goRight{
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: -80px;
        margin: auto;
        height: 50px;
        cursor: pointer;
        right: 123px;
    }
   
   .goNext{
        position: absolute;
        top: 0;
        bottom: 100px;
        right: 0px;
        cursor: pointer;
        margin: auto;
        z-index: 9;
        height: 50px;
   }
   .goPrev{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0px;
        cursor: pointer;
        margin: auto;
        z-index: 9;
        height: 50px;
   }
   
   .swiper-pagination{
       width: fit-content;
       position: absolute;
       top: 100px;
       right: 134px;
       z-index: 5;
       color:transparent;
       flex-direction: column;
       span{
        font-size: 50px;
        font-weight: 300;
        color: #ffffff;
        line-height: 40px;
        display: flex;
        &.swiper-pagination-current{
          position: relative;
          &:after{
            content: '';
            height: 2px;
            width: calc(100% + 30px);
            bottom: -6px;
            background-color: #969696;
            position: absolute;
            left: -15px;
        
          }
        }
        &.swiper-pagination-total{
          //margin-top: -31px;
          color: #969696;
          margin-top: -5px;
        }
       }
   }

  .swiper-button-next{
       position: absolute;
        right: 120px;
        top: 0;
        bottom: 60px;
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
        right: 120px;
        top: 0;
        bottom: -60px;
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
    
`;


export default BusinessDivision;

