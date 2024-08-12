import React, { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: "reg" | "login" | "logout" | "";
  setOpen: React.Dispatch<"reg" | "login" | "logout" | "">;
}

export function UserModal({
  open,
  setOpen,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <div>
      <Modal
        open={!!open}
        onClose={() => setOpen("")}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
