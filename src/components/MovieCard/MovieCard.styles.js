import styled from "styled-components";

export const Card = styled.div`
  background: none;

  .movie-poster {
    border-radius: 20px 20px 0 0;
  }

  .movie-details {
    color: var(--bs-white);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0 0 20px 20px;

    .movie-overview {
      font-size: 18px;
    }

    .rate {
      background-color: var(--bs-white);
      color: var(--bs-dark);
      border-radius: 100%;
      display: inline-block;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-weight: bolder;
    }
  }
  
  @media (min-width: 768px) {
    .movie-poster {
      border-radius: 20px 0 0 20px;
    }

    .movie-details {
      border-radius: 0 20px 20px 0;
    }
  }
`;