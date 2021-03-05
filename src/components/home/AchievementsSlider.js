import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import Swiper from 'react-id-swiper';

// css
import "swiper/swiper.scss";


// img
import arrowImg from '../../assets/images/btn-arrow-white.svg'
import bg from '../../assets/images/dynamic/acheivement.jpg'
import RightIcon from "../../assets/images/navRight.svg";
import LeftIcon from "../../assets/images/navLeft.svg";


function BusinessDivision() {

    const params = {
        slidesPerView: 4,
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

        <StyledDivision className="pt110 pb110">
            <img src={bg} alt=""/>
            <Container className="businessTitle" >
                <p className="subTitle">achievements</p>
            </Container>

            <Container className="achievements-slider">
                <Swiper  {...params}>

                    <div className="achievements-slider__single">
                        <h4>Export Award <br/>
                            2020</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>HSBC Export <br/>
                            Excellence Award <br/>
                            2009</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>HSBC Export <br/>
                            Excellence Award <br/>
                            2009</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>Partnership with <br/>
                            a leading EU company</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>Export Award <br/>
                            2020</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>HSBC Export <br/>
                            Excellence Award <br/>
                            2009</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>HSBC Export <br/>
                            Excellence Award <br/>
                            2009</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                    <div className="achievements-slider__single">
                        <h4>Partnership with <br/>
                            a leading EU company</h4>

                        <p>Achievements are things you did that had a lasting impact for your company or client. It is a
                            result that you personally bring about while fulfilling a particular role. </p>

                        <p>Typically they are things that you created, built, designed, sold or initiated.</p>
                        <a href="#">Read more</a>
                    </div>

                </Swiper>
            </Container>
        </StyledDivision>

    )


}


const StyledDivision = styled.div`
    position: relative;
   >img{
      position: absolute;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      top: 0;
      bottom: 0;
   }
   .container{
    position: relative;
    z-index: 2;
   }
   
   .achievements-slider{
      margin-top: 100px;
      .swiper-wrapper{
        margin-bottom: 90px;
      }
      &__single{
        h4{
          margin-top: 0;
          font-size: 24px;
          font-weight: bold;
          line-height: 32px;
          text-transform: capitalize;
          margin-bottom: 30px;
          color: #ffffff;
        }
        p{
          font-size: 14px;
          line-height: 21px;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 20px;
          &:nth-last-of-type(1){
            margin-bottom: 0;
          }
        }
        a{
          margin-top: 30px;
          font-size: 16px;
          line-height: 18px;
          color: #ffffff;
          text-decoration: underline;
          display: block;
          transition:all .3s ease;
          &:hover{
            color: ${hover};
            letter-spacing: 2px;
          }
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
`;





export default BusinessDivision;

