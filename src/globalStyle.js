import {createGlobalStyle} from 'styled-components';
import {hover} from './globalStyleVars'




export default createGlobalStyle`
    
     @font-face {
        font-family: 'Aeonik';
        src: url('./assets/fonts/Aeonik-Black.woff2') format('woff2'),
            url('./assets/fonts/Aeonik-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Aeonik';
        src: url('./assets/fonts/Aeonik-Regular.woff2') format('woff2'),
            url('./assets/fonts/Aeonik-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Aeonik';
        src: url('./assets/fonts/Aeonik-Medium.woff2') format('woff2'),
            url('./assets/fonts/Aeonik-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Aeonik';
        src: url('./assets/fonts/Aeonik-Light.woff2') format('woff2'),
            url('./assets/fonts/Aeonik-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }   
    
    
    body{
       font-family: 'Aeonik' , sans-serif;
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       color: #1B1D1D;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
      
    }
    
    
    a:hover {
      color: ${hover};
    }
    
    ::selection {
      background: ${hover};
      color: #FFF;
    }
    
    p, a, h1, h2, h4, h3 {
      color: #1B1D1D;
     
    }
    
    ul {
      margin: 0;
      padding: 0
    }
    
    li {
      list-style: none;
    }
    a:hover, a:focus {
      text-decoration: none;
      outline: none;
      box-shadow: none;
    }
    
    .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
      outline: none;
      box-shadow: none;
    }
    
    table {
      width: 100%;
    }
    .form-control {
      box-shadow: none;
      outline: 0;
    
      &:focus {
        box-shadow: none;
      }
    }
     
     %overlay {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      content: '';
    }
    
    %bg {
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-color: #f1f1f1;
      //box-shadow: inset 0 0 80px rgba(0,0,0,0.5);
    }
    
    %link {
      position: absolute;
      height: 100%;
      width: 100%;
      display: block;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .dcBtn {
      font-size: 14px;
      background: transparent;
      border: 1px solid;
      position: relative;
      transition: all .3s ease;
      text-transform: capitalize;
      font-weight: 500;
      overflow: hidden;
      display: inline-block;
      text-align: center;
      height: 50px;
      width: 170px;
      border-color: ${hover};
      color: #1b1d1d;
      line-height: 50px;
      letter-spacing: 1px;
      span {
        z-index: 2;
        position: relative;
        transition: all .3s ease !important;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        img{
          transition:transform .5s ease;
          margin-left: 10px;
        }
      }
    
      // &:after {
      //   content: '';
      //   position: absolute;
      //   width: 100%;
      //   height: 0;
      //   left: 0;
      //   top: 0;
      //   transition: height 0.6s cubic-bezier(0.85, 0, 0.15, 1);
      //   background: ${hover};
      // }
    
      &:hover {
        border-color: ${hover} !important;
    
        span {
          //color: #FFF !important;
          img{
            transform: translateX(5px);
            
          }
        }
    
        &:after {
          height:100%;
        }
      }
    }  
    
    .Title{
      font-size: 42px;
      font-weight: bold;
      margin: 0;
      line-height: 42px;
      text-transform: capitalize;
    }
    
    .subTitle{
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      line-height: 21px;
      color:${hover};
      text-transform: uppercase;
      letter-spacing: 3px;
    }  
    
    .p0{
      padding:0 !important;
    }
    
    .pt110{
      padding-top: 110px;
    }
    .pb110{
      padding-bottom: 110px;
    }
    .swiper-button-disabled{
      opacity: .2;
    }
    
       
`;





















