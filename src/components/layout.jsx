  
import Head from "next/head";
import Link from "next/link";
import { Image, Grid } from 'semantic-ui-react'
import TT from '../../public/twitter-image.jpg'


export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sanity + Next.js = 💖</title>
      </Head>
      <Grid style={{backgroundColor: '#16212B'}} celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <Image size='mini'  src={TT}/>
      </Grid.Column>
      <Grid.Column width={10}>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
    </Grid>
      <div id="main">{props.children}</div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 0 0 0;
        }
      `}</style>
    </div>
  );
}