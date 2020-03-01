import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { Button, Menu, Icon } from 'semantic-ui-react'
import { DivMenuLeftStyled } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveBar } from '../../store/layout/selectors';
import { changeActiveBar } from '../../store/layout/actions';


export const MenuLeft = () => {
  const active = useSelector(getActiveBar)
  const dispatch = useDispatch()
    const router = useRouter()
    const handleItemClick = async (e, { name, route }) =>{
      try {
        await router.push(route)
        dispatch(changeActiveBar(name));
      } catch (error) {
        
      }
    }

return (
    <DivMenuLeftStyled>
    <Menu  secondary vertical>
    <Menu.Item
      name='home'
      route="/home"
      
      active={active === 'home'}
      onClick={handleItemClick}
    >
        <Icon name='home' />
        Inicio
    </Menu.Item>
    <Menu.Item
      name='explore'
      route="/contact"
      active={active === 'explore'}
      onClick={handleItemClick}
    >
        <Icon name='hashtag' />
        Explorar
    </Menu.Item>
    <Menu.Item
      name='notification'
      route="/about"
      active={active === 'notification'}
      onClick={handleItemClick}
>
<Icon name='bell outline' />
        Notificaciones
    </Menu.Item>    
    <Menu.Item
      name='messages'
      route="/home"
      
      active={active === 'messages'}
      onClick={handleItemClick}
    >
        <Icon name='mail outline' />
        Mensajes
    </Menu.Item>
    <Menu.Item
      name='saved'
      route="/contact"
      active={active === 'saved'}
      onClick={handleItemClick}
    >
        <Icon name='bookmark outline' />
        Guardados
    </Menu.Item>
    <Menu.Item
      name='lists'
      route="/home"
      active={active === 'lists'}
      onClick={handleItemClick}
    >
        <Icon name='list alternate outline' />
        Listas
    </Menu.Item>
    <Menu.Item
      name='profile'
      route="/home"
      
      active={active === 'profile'}
      onClick={handleItemClick}
    >
        <Icon name='user outline' />
        Perfil
    </Menu.Item>
    <Button size="big" fluid >TWITTEAR</Button>
  </Menu>

    </DivMenuLeftStyled>
)
    }