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
            float: left;
        }
    }
    &>.ui.secondary.menu .active.item{
        color: #1991DA;

    }
`
