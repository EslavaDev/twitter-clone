import styled from 'styled-components';
import { Segment, Header, Icon } from 'semantic-ui-react';

export const SegmentStyled = styled(Segment)`
    &.ui.segment{
    width: 90%;
    height: 300px;
    flex-direction: column;
    display: flex;
    background-color: #192734;
    padding: 14px 0px 14px 0px
}
`
export const H1Styled = styled(Header)`
    &.ui.header{
        font-size:40;
        color: white;
    }
`

export const IconSettingStyled = styled(Icon)`
    &.ui.icon{
        height: 90; 
        width: 90;
    }
`
export const hedaerColombiaTrendStyled = styled(Header)`
&.ui.header {
    font-size: 30px; 
    text-transform: capitalize;
}
`