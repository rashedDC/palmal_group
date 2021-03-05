import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import Swiper from 'react-id-swiper';


// demo images
import c1 from '../../assets/images/dynamic/c1.jpg'
import c2 from '../../assets/images/dynamic/c2.jpg'
import c3 from '../../assets/images/dynamic/c3.jpg'
import c4 from '../../assets/images/dynamic/c4.jpg'
import c5 from '../../assets/images/dynamic/c5.jpg'
import c6 from '../../assets/images/dynamic/c6.jpg'




function ClientSlider() {

    const params = {
        slidesPerView: 6,
        spaceBetween: 30,
        speed:1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };



    return (
        <StyledClient className="pt110 pb110">
            <Container>
                <Row>

                    <Col sm={12}>
                        <h4 className="subTitle">our clients</h4>


                        <Swiper  {...params}>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c1} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c2} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c3} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c4} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c5} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c6} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c2} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c3} alt=""/>
                                </div>
                            </div>

                            <div className="client-single">
                                <div className="client-single__inner">
                                    <img src={c4} alt=""/>
                                </div>
                            </div>

                        </Swiper>
                    </Col>


                </Row>
            </Container>
        </StyledClient>
    )


}


const StyledClient = styled.div`
    .subTitle{
      margin-bottom: 40px;
      color: #58585A;
    }
    .client-single{
      &__inner{
        padding-top: 100%;
        border:1px solid #707070;
        img{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          bottom:0;
          object-fit: contain;
          max-width:80%;
        }
      }
    }
    .swiper-slide{
      margin-bottom: 10px;
    }
`


export default ClientSlider;