import {WithLogin} from "./components/Login/WithLogin.jsx";
import HomeLogin from "./components/Login/HomeLogin.jsx";
import ModalLogin from "./components/Login/ModalLogin.jsx";
import './index.css'
import Container from "./components/Container.jsx";
import Grid from "./components/Grid/Grid";
import GridItem from "./components/Grid/GridItem";
import Button from "./components/Button/Button";
import {useState} from "react";
import {ModalContext} from "./context/ModalContext.js";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";

function Login() {
  const HomeLoginWithLogin = WithLogin(HomeLogin);
  const ModalLoginWithLogin = WithLogin(ModalLogin);
  const [openModal, setOpenModal] = useState(false);

  const closeOpenModal = () => {
    setOpenModal(false);
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <nav className={"p-6 bg-slate-900"}>
        <Grid gridCols={"4"} gridRows={"1"}>
          <GridItem>
            <Button variant={"success"} handleOnClick={() => setOpenModal(true)}>
              Login
            </Button>
          </GridItem>
        </Grid>
      </nav>

      <Container>
        <HomeLoginWithLogin />
      </Container>

      <ModalContext.Provider value={{open: openModal, closeOpenModal}}>
        <ModalLoginWithLogin/>
      </ModalContext.Provider>
    </QueryClientProvider>
  )
}

export default Login
