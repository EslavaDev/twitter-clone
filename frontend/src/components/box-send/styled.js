import styled from "styled-components";
import { Grid, Container, TextArea, Divider } from "semantic-ui-react";

export const GridBoxSendGeaderStyled = styled(Grid)`
  &.ui.grid {
    margin: 1rem;
    margin-bottom: 0;
    ${props =>
      props.noMargin &&
      `    margin-left: 0px;
    margin-right: 0px;`}
  }
`;

export const IputTextAreaHeaderStyled = styled(TextArea)`
  & {
    min-height: 1rem;
    margin-top: 20px;
    width: 100%;
    background-color: #16212b;
    border-color: unset;
    border-width: 0px;
    font-size: 20px;
    color: #ffffff;
  }
  &::-webkit-input-placeholder {
    color: #9197a3;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #9197a3;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #9197a3;
  }

  &:-ms-input-placeholder {
    color: #9197a3;
  }

  &::placeholder {
    color: #9197a3;
  }
  &:focus {
    border-color: unset;
    border-width: 0px;
  }
  &:active {
    border-color: unset;
    border-width: 0px;
  }
`;

export const ContainterBoxSendButtonsStyled = styled(Container)`
  justify-content: flex-end;
  align-items: center;
  &.ui.container {
    display: flex;
    .ui.button {
      background-color: #1991da;
      color: #ffffff;
      border-radius: 40px;
      font-size: 13px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
`;

export const DividerBoxSendStyled = styled(Divider)`
  &.ui.divider {
    margin: ${props => props.margin ? '1rem 0rem' : '0'} !important;
    border-top-width: ${props => props.margin ? '1' : '5'}px !important;
    border-bottom-width: ${props => props.margin ? '1' : '5'}px !important;
    border-color: #253341 !important;
  }
`;
