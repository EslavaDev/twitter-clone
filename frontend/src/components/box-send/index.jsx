import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Image, Button} from "semantic-ui-react";
import {
  IputTextAreaHeaderStyled,
  GridBoxSendGeaderStyled,
  ContainterBoxSendButtonsStyled,
  DividerBoxSendStyled
} from "./styled";
import { sendData } from "../../store/tweets/actions";
import { getAvatar } from "../../store/layout/selectors";

export const BoxSend = props => {
  const [valueTextArea, setValueTextArea] = useState();
  const avatar = useSelector(getAvatar)
  const dispatch = useDispatch();
  const handleChange = (e, { value }) => {
    setValueTextArea(value);
  };
  const handleSend = () => {
    try {
      dispatch(sendData(valueTextArea));
      setValueTextArea('')
    } catch (error) {}
  };
  return (
    <Container style={{ overflow: "scroll", height: "92vh" }}>
      <GridBoxSendGeaderStyled>
        <Grid.Row style={{ paddingTop: "0px" }}>
          <Grid.Column width="2">
            <Image
              style={{ width: "70px", height: "70px" }}
              src={avatar}
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
