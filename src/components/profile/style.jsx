import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 0.5rem;
  height: 12.5rem;

  h1,
  h3,
  h4 {
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  h4 {
    font-size: 1rem;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 0.5rem;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  h3 {
    margin-right: 0.5rem;
  }

  a {
    color: #795cfc;
    font-size: 1.125rem;
    transition: color 0.2s ease;

    &:hover {
      color: #2400c4;
    }
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 12.5rem;
  margin: 0.5rem;
`;
