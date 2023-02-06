import {useContext} from "react";
import {LoginContext} from "../../context/LoginContext.js";
import Button from "../Button/Button.jsx";
import Modal from "../Modal";
import Grid from "../Grid/Grid.jsx";
import GridItem from "../Grid/GridItem.jsx";
import {Input} from "../Input/Input.jsx";

export default function ModalLogin() {
  const login = useContext(LoginContext);

  return (
    <Modal>
      <div className={"pt-6 flex justify-center"}>
        <Grid test={"h-100"}>
          <GridItem>
            <Input type={"email"} placeholder={"Email"} name={"email"} />
          </GridItem>

          <GridItem>
            <Input type={"password"} placeholder={"Password"} name={"password"}/>
          </GridItem>

          <GridItem colSpan={"2"}>
            <Button handleOnClick={login} variant={"success"}>
              Login
            </Button>
          </GridItem>
        </Grid>
      </div>
    </Modal>
  )
}