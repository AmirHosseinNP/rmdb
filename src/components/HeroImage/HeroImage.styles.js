import styled from "styled-components";

export const Wrapper = styled.div`
  animation: fading 0.5s;
  
  @keyframes fading {
    from {opacity: 0;}
    to {opacity: 1}
  }
`;

export const Arrow = styled.i`
  font-size: 60px;
  text-shadow: 2px 1px 2px black;

  @media (max-width: 992px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(0,0,0);
  background: -moz-linear-gradient(0deg, rgba(0,0,0,0.6026785714285714) 0%, rgba(0,0,0,0) 40%);
  background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.6026785714285714) 0%, rgba(0,0,0,0) 40%);
  background: linear-gradient(0deg, rgba(0,0,0,0.6026785714285714) 0%, rgba(0,0,0,0) 40%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
`;

export const CarouselImage = styled.img`
  @media (min-width: 992px) {
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 576px) {
    height: 110vw;
    width: 100%;
  }
`;