import { LoginContext } from "../../context/LoginContext.js";
import {useMutation} from "react-query";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Login({children}) {
  const navigate = useNavigate();

  const doLogin = async ({email, password}) => {
    return await axios.post('http://localhost/api/login');
  }

  const mutation = useMutation(doLogin, {
    onSuccess: () => {
      navigate("home")
    }
  });

  return (
    <>
      <LoginContext.Provider value={({email, password}) => mutation.mutate({email, password})}>
        {children}
      </LoginContext.Provider>
    </>
  )
}