import styled from "styled-components";
import { Grid, Input } from "semantic-ui-react";

export const GridColumnHeaderStyled = styled(Grid.Column)`
  display: flex;
  align-items: flex-start;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  justify-content: ${props => props.center ? 'center' : 'unset'};
  color: white;
  ${props => !!props.padding && `padding: 0px !important;`}
`;
export const GridHeaderStyled = styled(Grid)`
  &.ui.celled.grid > .row > .column {
    box-shadow: -1px 0 0 0 #4a4444;
  }
  &.ui.celled.grid > .row {
    box-shadow: 0 -1px 0 0 #4a4444;
  }
  &.ui.celled.grid > #body-grid {
    height: 92.8vh;
  }
`;

export const InputSearchStyled = styled(Input)`
  &.ui.input {
    width: 90%;
  }
  &.ui.input > input {
    background-color: #253341;
    border-radius: 2.285714rem;
  }
`;
