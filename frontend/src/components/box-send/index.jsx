import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Image, Button, Divider } from "semantic-ui-react";
import TT from "../../../public/twitter-image.png";
import {
  IputTextAreaHeaderStyled,
  GridBoxSendGeaderStyled,
  ContainterBoxSendButtonsStyled,
  DividerBoxSendStyled
} from "./styled";
import { sendData } from "../../store/tweets/actions";

export const BoxSend = props => {
  const [valueTextArea, setValueTextArea] = useState();
  const dispatch = useDispatch();
  const handleChange = (e, { value }) => {
    setValueTextArea(value);
  };
  const handleSend = () => {
    try {
      dispatch(sendData(valueTextArea));
    } catch (error) {}
  };
  return (
    <Container style={{ overflow: "scroll", height: "92vh" }}>
      <GridBoxSendGeaderStyled>
        <Grid.Row style={{ paddingTop: "0px" }}>
          <Grid.Column width="2">
            <Image
              style={{ width: "70px", height: "70px" }}
              src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              fluid
              circular
            />
          </Grid.Column>
          <Grid.Column width="14">
            <IputTextAreaHeaderStyled
              placeholder="¿Qué está pasando?"
              onChange={handleChange}
              value={valueTextArea}
            />
            <ContainterBoxSendButtonsStyled fluid>
              <Button onClick={handleSend}>Twitterar</Button>
            </ContainterBoxSendButtonsStyled>
          </Grid.Column>
        </Grid.Row>
      </GridBoxSendGeaderStyled>
      <DividerBoxSendStyled />
      {props.children}
    </Container>
  );
};
