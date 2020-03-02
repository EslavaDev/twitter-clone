import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GridHeaderStyled } from "./style";
import { useEffect } from "react";
import GridRowBodyLayout from "./grid-row-body";
import GridRowHeaderLayout from "./grid-row-header";
import { getSearch, getUserName } from "../../store/layout/selectors";

export default function Layout(props) {
  const router = useRouter();
  const title = useSelector(getSearch);
  const userAnonymous = useSelector(getUserName);
  useEffect(() => {
    if (!userAnonymous) router.push("/");
  }, []);
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Twitter</title>
      </Head>
      <GridHeaderStyled
        style={{ backgroundColor: "#16212B" }}
        celled="internally"
      >
        <GridRowHeaderLayout title={title} />
        <GridRowBodyLayout>{props.children}</GridRowBodyLayout>
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
