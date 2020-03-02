import React from "react";
import { Image, Grid } from 'semantic-ui-react'
import TwitterImage from '../../../public/twitter-image.png'
import { GridColumnHeaderStyled, InputSearchStyled } from "./style";


export default function GridRowHeaderLayout(props) {
  return (
    <Grid.Row>
      <Grid.Column width={3}>
      <Image style={{marginLeft: '20%'}} size='mini'  src={TwitterImage}/>
      </Grid.Column>
      <GridColumnHeaderStyled padding width={9}>
        <h1>
            {props.title}
            </h1>
      </GridColumnHeaderStyled>
      <GridColumnHeaderStyled center fullWidth width={4}>
      <InputSearchStyled size="large" icon='search' iconPosition='left' placeholder='Buscar en Twitter' />
      </GridColumnHeaderStyled>
    </Grid.Row>
  );
}