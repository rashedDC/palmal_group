import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {hover, darkGreen} from '../../globalStyleVars';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import arrowImg from '../../assets/images/btn-arrow-green.svg'


//redux
import {useDispatch,useSelector}  from "react-redux";
import {loadData} from "../../actions/home";



function AboutUs() {


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadData())
    },[dispatch]);


    const About = useSelector((state)=> state.homeData.HomeAbout);


    return (

        <StyledAbout className="pt110 pb110">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className="subTitle">About us</h2>
                    </Col>

                    <Col sm={6} className="about__left">


                        <h4>Over more than 35 years,
                            Palmal Group is leading the ready-made garments industry</h4>
                        <p>Above expectations, Palmal Group is synonymous with quality, trust and differentiation in
                            the solutions and services it provides to its customers.</p>
                        <p>We deliver on time and work to exceed expectations. Our teams are oriented towards the
                            solution, with proactivity and agility being our focus in each project.</p>

                        <a href="#" className='dcBtn'><span>explore <img src={arrowImg} alt=""/></span></a>
                    </Col>

                    <Col sm={{span: 5, offset: 1}} className="about__right">

                        <div className="about__right__single">
                            <h4> <CountUp start={0} end={35}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} partialVisibility={{top:0,bottom:20}} delayedCall>
                                        <span ref={countUpRef}></span>
                                    </VisibilitySensor>
                                )}
                            </CountUp>+</h4>
                            <p><span>YEARS</span> OF PROVEN <br/>
                                EXPERIENCE</p>
                        </div>

                        <div className="about__right__single">

                            <h4>
                                <CountUp start={0} end={30} redraw={true}>
                                    {({countUpRef, start}) => (
                                        <VisibilitySensor onChange={start} partialVisibility={{top:0,bottom:20}} delayedCall>
                                            <span ref={countUpRef}></span>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            +</h4>
                            <p><span>Factories</span> in operation <br/>
                                & 60+ Business Units</p>
                        </div>

                        <div className="about__right__single">
                            <h4> <CountUp start={0} end={25} redraw={true}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} partialVisibility={{top:0,bottom:20}} delayedCall>
                                        <span ref={countUpRef}></span>
                                    </VisibilitySensor>
                                )}
                            </CountUp>K</h4>
                            <p><span>MOTIVATED</span> employees <br/>
                                of high skillset</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </StyledAbout>


    )
}


export default AboutUs;


const StyledAbout = styled.div`
    background-color: rgba(30,195,170,0.05);
    .subTitle{
      margin-bottom: 50px;
    }
    .about__left{
      h4{
        font-size: 48px;
        font-weight: 500;
        margin-bottom: 40px;
        margin-top: 0;
      } 
      p{
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
        margin-bottom: 20px;
        &:nth-last-of-type(1)  {
          margin-bottom: 0;
        }     
      }
      .dcBtn{
        width: 172px;
        margin-top: 60px;
      }
    }
    .about__right{
      &__single{
      margin-bottom: 8px;
        h4{
          font-size: 110px;
          line-height: 147px;
          font-weight: 300;
          margin: 0;
        }
        p{
           font-size: 16px;
           line-height: 24px;
           font-weight: 300;
           margin: 0;
           text-transform: uppercase;
           span{
            font-weight: bold;
           }
        }
        &:nth-of-type(2){
          text-align: right;
        }
        
      }
    }
`


