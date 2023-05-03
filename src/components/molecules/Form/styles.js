import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.4rem 1.2rem;
    font-size: 1rem;
  }

  img {
    height: 1.2rem;
  }
`;

export const StyledText = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 0.95rem;
  }
  a {
    color: #f2877d;
    text-decoration: none;
  }
`;
export const StyledInput = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;

  input {
    width: 100%;
    padding: 0.8rem 1.8rem;
    border-radius: 0.3rem;
    border: solid 2px rgb(223, 223, 223);
    font-size: 1rem;
  }
  input:focus-visible {
    outline-color: #f2877d;
  }

  svg {
    transform: translate(11px, 31px);
  }
`;
