const initialState = {
    BannerSlider:[],
    HomeAbout:[]
}

const HomeReducer = (state = initialState, action)=>{
    switch(action.type) {
        case "FETCH_HOME" :
            return {
                ...state,
                BannerSlider:action.payload.BannerSlider,
                HomeAbout:action.payload.HomeAbout
            }
        default:
            return {
                ...state
            }
    }
}

export default HomeReducer;





