import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem;

  input {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;
    padding: .5rem;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
    transition: background .2s ease;

    &:hover {
      background-color: #395ca0;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
