import styled from "styled-components";
// Config
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../config";

export const Wrapper = styled.div`
  background: ${({backdropPath}) =>
          backdropPath
                  ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}")`
                  : "var(--bs-dark)"
  };
  background-position: center;
  background-size: cover;
  padding: 40px 20px;
  animation: fade 1s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;