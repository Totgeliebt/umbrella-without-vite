import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background-color: #fffae9;

  a{
    white-space:  nowrap;
  }

  @media(max-width:430px){
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .footer__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 43px 0;
    @media(max-width:430px){
      padding: 23px 0;
    }
  }
  .footer__info {
    min-width: 150px;
    transform: translateY(10px);
    @media(max-width:430px){
      transform: translateY(0px);
    }
  }

  .footer_create-btn {
    border: 2px solid #ff5c00;
    min-width: 250px;
    height: 40px;
    border-radius: 52px;
    padding: 8px 20px;

    @media(max-width:430px){
    min-width: 220px;
    }
  }

  .footer_create-btn:hover {
    cursor: pointer;
    background: #ff5c00;
    color: #ffffff;
  }
`;
