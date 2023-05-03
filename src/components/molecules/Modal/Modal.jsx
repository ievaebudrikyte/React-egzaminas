import { createPortal } from "react-dom";
import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledCloseButtonContainer,
  StyledFormWrapper,
} from "./styles";
import Form from "../Form/Form";
import Button from "../../atoms/Button";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper>
        <StyledCloseButtonContainer>
          <div>
            <IoClose />
          </div>
        </StyledCloseButtonContainer>

        <StyledModal>
          <img src="src\images\4861083.jpg" alt="" srcset="" />
          <StyledFormWrapper>
            <Form />
            <Button text="Submit" color="#F2877D" />
          </StyledFormWrapper>
        </StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
