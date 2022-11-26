import { ThreeCircles } from "react-loader-spinner";
import Modal from "react-modal";
import { ModalStyle } from "../Modal/styles";

export function LoadingSpinner() {
  return (
    <Modal
      isOpen={true}
      contentLabel="Formulário para adicoinar tecnologia."
      style={ModalStyle}
    >
      <ThreeCircles
        color="#3fe864"
        ariaLabel="three-circles-rotating"
        middleCircleColor="#e83fab"
      />
    </Modal>
  );
}
