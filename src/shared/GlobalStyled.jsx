import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    
    #root {
    height: 100vh;
  
  }

    body{
      background-color: #e8e8e8;
      display: flex;
      align-items: center;
      justify-content: center;
    }

   button{
    background-color: #26bcaa;
    height: 40px;
    width: 100%;
    margin: 5px 10px;

    cursor: pointer;
    font-weight: 400;

    &:hover{
      background-color: #e8e8e8;
      color: #26bcaa;
      font-weight: 700;
    }
   }
   
`;
export default GlobalStyled;
