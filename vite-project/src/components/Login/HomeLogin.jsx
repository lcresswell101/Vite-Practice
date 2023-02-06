import {useContext} from "react";
import {LoginContext} from "../../context/LoginContext.js";
import Button from "../Button/Button";
import Grid from "../Grid/Grid.jsx";
import GridItem from "../Grid/GridItem";
import {Input} from "../Input/Input.jsx";
import {useForm, Controller} from "react-hook-form";

export default function HomeLogin() {
  const login = useContext(LoginContext);

  const {handleSubmit, control, formState: {errors}} = useForm({
    defaultValues: {
      email: false,
    }
  });

  return (
    <form onSubmit={handleSubmit((data) => login({...data}))}>
      <div className={"pt-6 flex justify-center"}>
        <Grid>
          <GridItem>
            <Controller
              render={({
                field: {onChange}
              }) =>  <Input type={"email"} placeholder={"Email"} name={"email"} onChange={onChange} />}
              name="email"
              control={control}
              rules={{required: true}}
            />
          </GridItem>

          <GridItem>
            <Controller
              render={({
                field: {onChange}
              }) =>  <Input type={"password"} placeholder={"Password"} name={"password"} onChange={onChange} />}
              name="password"
              control={control}
              rules={{required: true}}
            />

          </GridItem>

          <GridItem colSpan={"2"}>
            <Button type={"submit"} variant={"success"}>
              Login
            </Button>
          </GridItem>
        </Grid>
      </div>
    </form>
  )
}