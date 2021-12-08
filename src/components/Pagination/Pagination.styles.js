import styled from "styled-components";

export const Wrapper = styled.div`
  .page-item {
    margin-right: 5px;
    margin-left: -1px;
    margin-bottom: 5px;
    
    &.prev-page.disabled, &.next-page.disabled {
      cursor: not-allowed;
    }
    
    &.active {
      .page-link {
        background: var(--bs-dark);
        color: var(--bs-white);
        border-color: var(--bs-dark);
        pointer-events: none;
      }
    }

    .page-link {
      color: var(--bs-dark);

      :focus {
        box-shadow: 0 0 0 0.25rem rgb(33 37 41 / 25%);
      }
    }
  }
`;