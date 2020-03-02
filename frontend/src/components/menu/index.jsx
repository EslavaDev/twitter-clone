import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menu, Icon } from "semantic-ui-react";
import { DivMenuLeftStyled } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getActiveBar } from "../../store/layout/selectors";
import { changeActiveBar } from "../../store/layout/actions";
import { ButtonTwiiter } from "../button/styled";
import { menuItem } from "../../helpers/constants";

export const MenuLeft = () => {
  const active = useSelector(getActiveBar);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleItemClick = async (e, { name, route }) => {
    try {
      await router.push(route);
      dispatch(changeActiveBar(name));
    } catch (error) {}
  };

  return (
    <DivMenuLeftStyled>
      <Menu secondary vertical>
        {menuItem.map(menuItemData => (
          <Menu.Item
            onClick={handleItemClick}
            active={active === menuItemData.name}
            name={menuItemData.name}
            route={menuItemData.route}
          >
            <Icon name={menuItemData.icon} />
            {menuItemData.label}
          </Menu.Item>
        ))}
        <ButtonTwiiter size="big" fluid>
          TWITTEAR
        </ButtonTwiiter>
      </Menu>
    </DivMenuLeftStyled>
  );
};
