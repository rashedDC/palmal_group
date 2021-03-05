import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import Slick from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import arrowImg from '../../assets/images/btn-arrow-white.svg'
import slides from '../../assets/images/dynamic/business.jpg'
import RightIcon from "../../assets/images/navRight.svg";
import LeftIcon from "../../assets/images/navLeft.svg";


function RightArrow(props) {
    const {className, style, onClick} = props;
    return (
        <li className="goRight" onClick={onClick}><img src={RightIcon} height="51" width="51" alt=""/></li>
    );
}

function LeftArrow(props) {
    const {className, style, onClick} = props;
    return (
        <li className="goLeft" onClick={onClick}><img src={LeftIcon} height="51" width="51" alt=""/></li>
    );
}

const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    autoplay: false,
    pauseOnHover: false,
    nextArrow: <RightArrow/>,
    prevArrow: <LeftArrow/>,

};

function BusinessDivision() {

    const get_lengt = document.getElementsByClassName('business__single__content').length;
    console.log(get_lengt);

    const offset_get = document.getElementsByClassName('business__single').documentOffsetLeft;
    console.log(offset_get);

    return (
        <StyledDivision>
            <Container className="businessTitle">
                <p className="subTitle">Business divisions</p>
            </Container>


            <Slick {...settings}>
                <div className="business__single pt110 pb110">
                    <img className="business__single__img" src={slides} alt=""/>

                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="business__single__content">
                                    <h2 className="Title"> Knitting Division</h2>
                                    <p>Our Knitting divisions are well equipped with the latest model of “Pailung” auto stripe
                                        machines with
                                        6
                                        color facility and “Lisky” circular & flat knitting machines with all necessary
                                        equipments
                                        to
                                        produce
                                        all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey & Double
                                        Jersey), Pique,
                                        Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in different dia,
                                        gauges &
                                        weights. </p>
                                    <a href="javascript:">view all concerns <img src={arrowImg} alt=""/></a>
                                </div>
                            </Col>

                        </Row>


                    </Container>
                </div>
                <div className="business__single pt110 pb110">
                    <img className="business__single__img" src={slides} alt=""/>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="business__single__content">
                                    <h2 className="Title"> Knitting Division</h2>
                                    <p>Our Knitting divisions are well equipped with the latest model of “Pailung” auto stripe
                                        machines with
                                        6
                                        color facility and “Lisky” circular & flat knitting machines with all necessary
                                        equipments
                                        to
                                        produce
                                        all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey & Double
                                        Jersey), Pique,
                                        Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in different dia,
                                        gauges &
                                        weights. </p>
                                    <a href="javascript:">view all concerns <img src={arrowImg} alt=""/></a>
                                </div>
                            </Col>

                        </Row>


                    </Container>
                </div>
                <div className="business__single pt110 pb110">
                    <img className="business__single__img" src={slides} alt=""/>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="business__single__content">
                                    <h2 className="Title"> Knitting Division</h2>
                                    <p>Our Knitting divisions are well equipped with the latest model of “Pailung” auto stripe
                                        machines with
                                        6
                                        color facility and “Lisky” circular & flat knitting machines with all necessary
                                        equipments
                                        to
                                        produce
                                        all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey & Double
                                        Jersey), Pique,
                                        Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in different dia,
                                        gauges &
                                        weights. </p>
                                    <a href="javascript:">view all concerns <img src={arrowImg} alt=""/></a>
                                </div>
                            </Col>

                        </Row>


                    </Container>
                </div>
                <div className="business__single pt110 pb110">
                    <img className="business__single__img" src={slides} alt=""/>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="business__single__content">
                                    <h2 className="Title"> Knitting Division</h2>
                                    <p>Our Knitting divisions are well equipped with the latest model of “Pailung” auto stripe
                                        machines with
                                        6
                                        color facility and “Lisky” circular & flat knitting machines with all necessary
                                        equipments
                                        to
                                        produce
                                        all kinds of circular knitted fabric in Light & Heavy Jersey (Single Jersey & Double
                                        Jersey), Pique,
                                        Rib, Interlock, Felpa, Sweat fabric, with Spandex attachment facility in different dia,
                                        gauges &
                                        weights. </p>
                                    <a href="javascript:">view all concerns <img src={arrowImg} alt=""/></a>
                                </div>
                            </Col>

                        </Row>


                    </Container>
                </div>


            </Slick>

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
   
   .slick-dots{
      width: fit-content;
      top: 100px;
      right: 123px;
      li{
        display: none;
      }
      .slick-active{
        display: block;
          button{
            font-size: 40px;
            color: #FFF;
            &:before{
              display: none;
            }
          }
      }
      button{
        &:before{
          display: none;
        }
      }
   }
    
`;


export default BusinessDivision;

