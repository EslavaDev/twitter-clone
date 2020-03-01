  
import Head from "next/head";
import { useSelector } from "react-redux";
import { Image, Grid, Input } from 'semantic-ui-react'
import Link from "next/link";
import TT from '../../../public/twitter-image.png'
import { getSearch } from "../../store/layout/selectors";
import { GridColumnHeaderStyled, GridHeaderStyled, InputSearchStyled } from "./style";
import { MenuLeft } from "../menu";


export default function Layout(props) {
  const title = useSelector(getSearch)
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Twitter</title>
      </Head>
      <GridHeaderStyled style={{backgroundColor: '#16212B'}} celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <Image style={{marginLeft: '20%'}} size='mini'  src={TT}/>
      </Grid.Column>
      <GridColumnHeaderStyled  style={{display:'flex', alignItems: 'center', color: 'white'}} width={9}>
        <h3 >{title}</h3>
      </GridColumnHeaderStyled>
      <Grid.Column style={{display:'flex', justifyContent: 'center', width: '100%', alignItems: 'center', color: 'white'}} width={4}>
        <InputSearchStyled size="large" icon='search' iconPosition='left' placeholder='Buscar en Twitter' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="body-grid">
      <Grid.Column width={3}>
      <MenuLeft />
      </Grid.Column>
      <GridColumnHeaderStyled  style={{display:'flex', alignItems: 'flex-start', color: 'white', padding: '0px'}} width={9}>
        {props.children}
      </GridColumnHeaderStyled>
      <Grid.Column style={{display:'flex', justifyContent: 'center', width: '100%', alignItems: 'center', color: 'white'}} width={4}>
        <InputSearchStyled size="large" icon='search' iconPosition='left' placeholder='Buscar en Twitter' />
      </Grid.Column>
    </Grid.Row>
    </GridHeaderStyled>
    
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 0 0 0;
        }
        #main {
          heigth: 100vh;
        }
      `}</style>
    </div>
  );
}