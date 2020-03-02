import React from "react";
import {  Grid } from 'semantic-ui-react'
import { GridColumnHeaderStyled} from "./style";
import { MenuLeft } from "../menu";
import { Tendencias } from "../tendencias";


export default function GridRowBodyLayout(props) {
  return (
    <Grid.Row id="body-grid">
      <Grid.Column width={3}>
      <MenuLeft />
      </Grid.Column>
      <GridColumnHeaderStyled padding width={9}>
        {props.children}
      </GridColumnHeaderStyled>
      <GridColumnHeaderStyled center fullWidth width={4}>
        <Tendencias />
      </GridColumnHeaderStyled>
    </Grid.Row>
  );
}