import axios from 'axios';

import {homePage} from '../api/home';



export const loadData = () => async(dispatch)=>{
    const bannerSlider = await axios.get(homePage);
    dispatch({
        type: "FETCH_HOME",
        payload: {
            BannerSlider: bannerSlider.data,
            HomeAbout : bannerSlider.data
        }
    })





};












