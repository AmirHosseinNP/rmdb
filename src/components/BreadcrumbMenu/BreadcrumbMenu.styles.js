import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bs-gray-700);
  height: 70px;
  animation: fade 1s;
  
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .breadcrumb {
    --bs-breadcrumb-divider: '|';

    .breadcrumb-item {
      font-size: 18px;
      @media (max-width: 576px) {
        font-size: 16px;
        padding: 0 .5rem 0 0;
      }
      &.active {
        color: var(--bs-white);
      }

      + .breadcrumb-item::before {
        color: var(--bs-white);
      }

      a {
        color: var(--bs-gray-300);

        :hover {
          color: var(--bs-white);
        }
      }
    }
  }
`;