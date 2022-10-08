// Material UI
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Loader Spinner
import { LoadingSpinner } from "../../Spinner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "&:focus": {
    outline: "none",
  },
};

export function BasicModal() {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoadingSpinner />
        </Box>
      </Modal>
    </div>
  );
}
