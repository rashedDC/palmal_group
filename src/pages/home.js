import React, {useEffect,Fragment} from 'react';
import {useDispatch,useSelector}  from "react-redux";
import {loadData} from "../actions/home";

// components
import Slider from '../components/home/BannerSlider'
import AboutUs from '../components/home/AboutUs'
import BusinessDivision from '../components/home/BusinessDevision'
import ClientSlider from '../components/home/ClientSlider'
import Achievement from '../components/home/AchievementsSlider'
import Certification from '../components/home/Certifications'
import NewsEvents from '../components/home/NewsEvents'





const Home = ()=>{

    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(loadData())
    // },[dispatch]);
    //
    // const {homeData} = useSelector((state)=> state.homeData);
    // const {newGames,popular,upcoming} = useSelector((state)=> state.game);



    return(
        <div>
            <Slider />
            <AboutUs />
            <BusinessDivision />
            <ClientSlider />
            <Achievement />
            <Certification />
            <NewsEvents />
        </div>
    );
}




export default Home;



