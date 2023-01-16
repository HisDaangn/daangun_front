import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Berger = styled(MenuIcon)({
  color: "black",
  fontSize: "30px",
  fontWeight: "lighter",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const Close = styled(CloseIcon)({
  color: "black",
  fontSize: "30px",
  cursor: "pointer",
});
export default function Hamberger() {
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <Berger
          onClick={() => {
            setOpen((e) => !e);
          }}
        />
      ) : (
        <Close
          onClick={() => {
            setOpen((e) => !e);
          }}
        />
      )}
    </>
  );
}
