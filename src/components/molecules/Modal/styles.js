import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;

  div {
    display: flex;
    font-size: 1.2em;
    font-weight: 800;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      background-color: whitesmoke;
    }
  }
`;

export const StyledModal = styled.div`
  padding: 4rem 3rem;
  border-radius: 0.2rem;
  background-color: white;
  width: 100vh;
  height: 100vh;
  img {
    display: none;
  }

  @media (min-width: 760px max-width:1000px) {
    max-width: 60vh;
    height: 80vh;
  }
  @media (min-width: 1000px) {
    display: flex;
    height: 80vh;
    width: 90%;
    padding: 0;
    flex-direction: row;
    align-items: center;

    img {
      display: block;
      height: 80%;
      object-fit: cover;
      max-width: 50%;
      overflow: hidden;
      padding: 2rem;
    }
  }

  button {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.25rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin-top: 1rem;
  }
  button:focus {
    outline-color: #f2877d;
  }
`;
export const StyledFormWrapper = styled.div`
  @media (min-width: 1000px) {
    width: 60%;
    padding: 4rem;
  }
`;
