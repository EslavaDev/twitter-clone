import styled from 'styled-components';

export const DivMenuLeftStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > .ui.secondary.vertical.menu>.item {
        color: white;
        font-size: 20px;
        i.icon {
            margin: 0;
            margin-right:10px;
        }
    }
    & > .ui.secondary.vertical.menu > .ui.fluid.button {
        background-color: #1991DA;
        color: #ffffff;
        border-radius: 40px;
        font-size: 13px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
