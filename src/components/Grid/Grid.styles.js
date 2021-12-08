import styled from "styled-components";

export const Wrapper = styled.div`
  animation: fading 0.5s;

  @keyframes fading {
    from {opacity: 0;}
    to {opacity: 1}
  }
`;