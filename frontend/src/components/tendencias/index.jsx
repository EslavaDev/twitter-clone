import React from 'react';
import { Divider, Dropdown, Icon } from 'semantic-ui-react';
import { SegmentStyled, H1Styled } from './styles';

const options = [
    {
      key: "Esto es spam",
      text: "Esto es spam",
      value: "Esto es spam",
      content: "Esto es spam"
    },
    {
      key: "Esto es abusivo",
      text: "Esto es abusivo",
      value: "Esto es abusivo",
      content: "Esto es abusivo"
    },
    {
      key: "Esto es duplicado",
      text: "Esto es duplicado",
      value: "Esto es duplicado",
      content: "Esto es duplicado"
    }
  ]

export const Tendencias = () => {

    return(<SegmentStyled>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: 0,
            boxShadow: 0,
            paddingLeft: 14,
            paddingRight: 14
          }}
        >
          <H1Styled>Tendencias para ti</H1Styled>
          <Icon name='setting' color='blue' />
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h6 style={{ textTransform: "capitalize", color: "gray", margin: 0 }}>
              Tendencia colombia
            </h6>
            <Dropdown
              inline
              header='Adjust time span'
              options={options}
            />
          </div>
          <h6 style={{ color: "white", margin: 0 }}>Cepa</h6>
          <h6 style={{ textTransform: "capitalize", margin: 0 }}>
            3.448 Tweets
          </h6>
        </div>
        <Divider style={{margin: 0}}/>
      </SegmentStyled>)
}