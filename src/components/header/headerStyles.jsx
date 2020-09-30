import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
  
      @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
      }
`

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 10px 25px;
      
      img {
        width: 50px;
        height: auto;
      }
    
      @media screen and (max-width: 800px) {
          width: 50px;
          padding: 0;
      }    
      
      @media screen and (max-width: 380px) {
          width: 0;
          height: 0;
          img {
            display: none;
          }
      }
`

export const OptionsContainer = styled.div`
      text-transform: uppercase;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border: 1px solid lightgray;
  
      @media screen and (max-width: 800px) {
          width: 80%;
          padding: 0;
      }
      
      @media screen and (max-width: 380px) {
         width: 100%;
      }
`

export const OptionsLink = styled(Link)`
   ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`