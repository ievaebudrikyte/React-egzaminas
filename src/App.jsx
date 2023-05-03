import Button from "./components/atoms/Button";
import { useState } from "react";
import Modal from "./components/molecules/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button text="Sign Up" action={openModal} />
      {isOpen && <Modal onClose={closeModal}>Modal content</Modal>}
    </div>
  );
}

export default App;
