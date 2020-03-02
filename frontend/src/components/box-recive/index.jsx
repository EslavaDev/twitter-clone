import React, { Fragment } from "react";
import { Grid, Image, Button, Divider } from "semantic-ui-react";
import { GridBoxSendGeaderStyled, DividerBoxSendStyled } from "../box-send/styled";

export const BoxRecive = ({data}) => {
  return (
    <GridBoxSendGeaderStyled noMargin>
      {data && data.map((i, index) => {
          console.log(i)
        return (
          <Fragment>
            <Grid.Row style={{ paddingTop: "0px", marginLeft: '1rem', marginRight: '1rem' }}>
              <Grid.Column width="2">
                <Image
                  style={{ width: "70px", height: "70px" }}
                  src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fluid
                  circular
                />
              </Grid.Column>
              <Grid.Column width="14">
        <h3>{i.name}</h3>
                <p>
                 {i.message}
                </p>
                <div>
                  <Button onClick={() => {}}>Twitterar</Button>
                </div>
              </Grid.Column>
            </Grid.Row>
            <DividerBoxSendStyled margin />
          </Fragment>
        );
      })}
    </GridBoxSendGeaderStyled>
  );
};
