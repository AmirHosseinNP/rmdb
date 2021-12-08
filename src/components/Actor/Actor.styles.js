import styled from "styled-components";

export const Wrapper = styled.div`
  border: 0;
`;

export const Image = styled.img`
  border: 5px solid var(--bs-dark);
  border-radius: 20px 20px 0 0;
  max-height: 150px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 576px) {
    max-height: 220px;
  }
`;

export const Text = styled.div`
  background: var(--bs-dark);
  color: var(--bs-white);
  text-align: center;
  border-radius: 0 0 20px 20px;
  word-wrap: normal;
  p {
    font-size: .8rem;
  }
  
  @media (min-width: 576px) {
    font-size: 1rem;
  }
  
`;