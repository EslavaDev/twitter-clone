import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { Button, Menu, Icon } from 'semantic-ui-react'
import { DivMenuLeftStyled } from './styles';


export const MenuLeft = () => {
  const [active, setActive] = useState('account');
    const router = useRouter()
    const handleItemClick = (e, { name, route }) =>{
        console.log(test)
        setActive(route)
    }

return (
    <DivMenuLeftStyled>
    <Menu  secondary vertical>
    <Menu.Item
      name='Inicio'
      route="home"
      color='#ffffff'
      active={active === 'home'}
      onClick={handleItemClick}
    >
        <Icon name='home' />
        Inicio
    </Menu.Item>
    <Menu.Item
      name='Explorar'
      route="explore"
      active={active === 'explore'}
      onClick={handleItemClick}
    >
        <Icon name='hashtag' />
        Explorar
    </Menu.Item>
    <Menu.Item
      name='Notificaciones'
      route="notification"
      active={active === 'notification'}
      onClick={handleItemClick}
>
<Icon name='bell outline' />
        Notificaciones
    </Menu.Item>    
    <Menu.Item
      name='Mensajes'
      route="messages"
      color='#ffffff'
      active={active === 'messages'}
      onClick={handleItemClick}
    >
        <Icon name='mail outline' />
        Mensajes
    </Menu.Item>
    <Menu.Item
      name='Guardados'
      route="saved"
      active={active === 'saved'}
      onClick={handleItemClick}
    >
        <Icon name='bookmark outline' />
        Guardados
    </Menu.Item>
    <Menu.Item
      name='Listas'
      route="lists"
      active={active === 'lists'}
      onClick={handleItemClick}
    >
        <Icon name='list alternate outline' />
        Listas
    </Menu.Item>
    <Menu.Item
      name='Perfil'
      route="profile"
      color='#ffffff'
      active={active === 'profile'}
      onClick={handleItemClick}
    >
        <Icon name='user outline' />
        Perfil
    </Menu.Item>
    <Button fluid >TWITTEAR</Button>
  </Menu>

    </DivMenuLeftStyled>
)
    }