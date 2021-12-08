import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;

  @media (max-width: 576px) {
    height: 65px;
  }
`;

export const InputGroup = styled.div`
    height: 55px;

  @media (max-width: 576px) {
    height: 35px;
  }
`;

export const Input = styled.input`
  background-color: #444d55;
  border: 0;
  border-radius: 0 40px 40px 0 !important;
  color: #fff !important;
  font-size: 28px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
  
  &:focus {
    background-color: #444d55;
    box-shadow: none;
  }
`;

export const Icon = styled.span`
  background-color: #444d55;
  border: 0;
  color: #fff;
  border-radius: 40px 0 0 40px !important;
  padding-right: 0 !important;
  font-size: 28px;
  
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;