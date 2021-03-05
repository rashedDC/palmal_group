import React,{useEffect} from 'react';
import Slick from "react-slick";
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover,darkGreen} from '../../globalStyleVars'

//redux
import {useDispatch,useSelector}  from "react-redux";
import {loadData} from "../../actions/home";


// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// img
import goDown from '../../assets/images/goDown.svg';

// demo images
import LeftIcon from '../../assets/images/navLeft.svg'
import RightIcon from '../../assets/images/navRight.svg'


import sliderOne from '../../assets/images/dynamic/slide1.jpg'
import sliderTwo from '../../assets/images/dynamic/slide2.jpg'
import arrowImg from '../../assets/images/btn-arrow-white.svg'


function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
        <li className="goRight" onClick={onClick}><img src={RightIcon} height="51" width="51" alt="" /></li>
    );
}

function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
        <li className="goLeft" onClick={onClick}><img src={LeftIcon} height="51" width="51" alt="" /></li>
    );
}






function BannerSlider() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadData())
    },[dispatch]);



    const Slide = useSelector((state)=> state.homeData.BannerSlider);



    // console.log(Slides)

    const baseUrl = 'https://bestinbd.com/projects/web/2101PGW/dev/admin/'



    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:7500,
        autoplay:false  ,
        pauseOnHover: false,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,

    };

    return (
        <StyledSlide className="BannerSlider">
            <StyledRadius>
                <p>creating happiness Since 1984 </p>
            </StyledRadius>
            <Slick {...settings}>




                {Slide.map((datas)=>(
                    datas.images.list.map((item)=>(
                            <div key={item.id} className="BannerSlider__single-item">
                                <img src={baseUrl+item.path+item.img_name } alt=""/>
                                <Container className="BannerSlider__single-item__content">
                                    <h4 className="subTitle">{item.short_desc}</h4>
                                    <h2>{item.short_desc_2}</h2>
                                    <p>{item.short_title}</p>
                                    <a href="" className="dcBtn"><span>explore<img src={arrowImg} alt="missing"/></span></a>

                                </Container>
                            </div>
                        ))


                ))}


            </Slick>



            <StyledGoDown>
                <p>about us</p>
                <img src={goDown} alt=""/>
            </StyledGoDown>

        </StyledSlide>
    )
}


// style start


const StyledSlide = styled.div`
    &.BannerSlider{
    height: 100vh;
    //overflow: hidden;
    position: relative;
      .BannerSlider__single-item{
        height: 100vh;
        position: relative;
         img{
              position: absolute;
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
        &__content{
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 100px;
            z-index: 25;
            
            .subTitle{
              margin-bottom: 10px;
              transform: translateY(35px);
              transition:all .8s cubic-bezier(0.16, 1, 0.3, 1);
              opacity: 0;
            }
            h2{
              font-size: 54px;
              line-height: 60px;
              color: #fff;
              font-weight:bold;
              transform: translateY(35px);
              //transition-delay:.3s;
              transition:all .8s cubic-bezier(0.16, 1, 0.3, 1);
              opacity: 0;
            } 
            
            p{
              font-size: 16px;
              line-height: 24px;
              color: #ffffff;
              transform: translateY(35px);
              //transition-delay:.3s;
              transition:all .8s cubic-bezier(0.16, 1, 0.3, 1);
              opacity: 0;
              margin: 0;
            }
            
            .dcBtn{
              border-color:${hover};
              color:#FFF;
              font-weight: 400;
              margin-top: 40px;
              background-color:${hover};
              border:none;
              //transition-delay: .5s;
              transform: translateY(35px);
              opacity: 0;
              transition:all .8s cubic-bezier(0.16, 1, 0.3, 1);
              &:after{
                background-color: ${darkGreen};
                
              }
              &:hover{
                border-color:${darkGreen} !important;
              }
              img{
                position: relative;
                object-fit: contain;
                display: inline;
                height: 14px;
                margin-left: 10px;
              }
            }
        }
      }
      
      
      .slick-active{
        h2,p,.subTitle,.dcBtn{
          transform: none;
          opacity: 1;
        }
        .subTitle{
            transition-delay: .4s;
        }
        h2{
          transition-delay: .7s;
        }
        p{
          transition-delay: 1s;
        }
        .dcBtn{
          cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 1.3s;
        }
      }
      
      .goLeft{
        position: absolute;
        z-index: 2;
        right: 120px;
        top: 0;
        bottom: 0;
        height: fit-content;
        margin: auto;
        cursor: pointer;
      }
      .goRight{
        position: absolute;
        z-index: 2;
        right: 120px;
        top: 0;
        bottom: -128px;
        height: fit-content;
        margin: auto;
        cursor: pointer;
      }
      
    }
    
    
    
    
`;


const StyledRadius = styled.div`
    position: absolute;
    z-index: 5;
    left: 15px;
    color: #FFF;
    top: 50%;
    margin: 0 auto;
    transform: rotate( -90deg) translateX(-50%);
    height: 26px;
    width: fit-content;
    transform-origin: center left;
    p{
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
`;


const StyledGoDown = styled.div`
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    width: 50px;
    p{
      color: ${hover};
      font-size: 12px;
      line-height: 24px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 20px;
      position: relative;
      white-space: nowrap;
      transform: rotate(-269deg);
      transform-origin: left bottom;
      bottom: 90px;
      left: 12px;
    }
`



export default BannerSlider;











