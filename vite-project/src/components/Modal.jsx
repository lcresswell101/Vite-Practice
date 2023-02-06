import Container from "./Container.jsx";
import {useContext} from "react";
import {ModalContext} from "../context/ModalContext.js";
import Button from "./Button/Button.jsx";
import Grid from "./Grid/Grid.jsx";
import GridItem from "./Grid/GridItem.jsx";

export default function Modal({ children }) {
  const {openModal, closeOpenModal} = useContext(ModalContext);

  const classes = openModal
    ? "fixed inset-0"
    : "hidden";

  return (
    <div className={`bg-black/75 ${classes}`}>
      <div className="p-6">
        <Grid gridCols={"4"} gridRows={"1"}>
          <GridItem>
            <Button variant={"danger"} handleOnClick={() => closeOpenModal(false)}>
              Close
            </Button>
          </GridItem>
        </Grid>
      </div>

      <Container>
        {children}
      </Container>
    </div>
  )
}