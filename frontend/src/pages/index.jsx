import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../store/layout/selectors";
import { Input } from "semantic-ui-react";
import { setUserAnonymous } from "../store/layout/actions";
import { ButtonTwiiter } from "../components/button/styled";
import { DivContainerIndexStyled } from "./styles";

const Index = () => {
  const [inputUser, setInputUser] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const userAnonymous = useSelector(getUserName);
  useEffect(() => {
    if (userAnonymous) router.push("/home");
  }, []);
  const handleChangeInput = (e, { value }) => setInputUser(value);
  const handleclick = async () => {
    await dispatch(setUserAnonymous(inputUser));
    await router.push("/home");
  };
  return (
    <DivContainerIndexStyled>
      <h1>Twitter Clone</h1>
      <h3>By EslavaDev</h3>
      <br />
      <span>
        <h4>
          Puedes ingresar anonimamente si no ingresas un nombre de usuario
        </h4>
        <Input
          onChange={handleChangeInput}
          fluid
          placeholder="Ingresa nombre usuario"
        ></Input>
        <br />
        <ButtonTwiiter fluid onClick={handleclick}>
          Continuar
        </ButtonTwiiter>
      </span>
    </DivContainerIndexStyled>
  );
};
export default Index;
