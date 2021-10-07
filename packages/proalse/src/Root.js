import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Header from "./components/header/header";
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import CertificacionSocialMedia from './components/CertificacionSocialMedia';
import Footer from './components/footer';

import Switch from "@frontity/components/switch";

import {useTransition, animated} from '@react-spring/web'

const Root = ({state, actions}) => {



    // Page transitions
    const transitions = useTransition(state.router.link, {
        from: { opacity: 0,},
        enter: { opacity: 1, },
        leave: { opacity: 0, display: "none"},
        config: { duration: 500 },
    });
 

    
    return (
      <>
        <Global
                styles={css`
                    :root {
                        --brand: #4e9968; //#5B3BE8;
                        --black: #000000;
                        --white: #ffffff;
                        --bodycolor: #343434;
                    }
                    
                    body {
                        margin: 0px !important;
                        color:var(--bodycolor);
                        font-family: 'Alegreya Sans', 'B612', sans-serif;
                        font-feature-settings: "kern";
                        -webkit-font-smoothing: antialiased;
                        min-height: -webkit-fill-available;
                    }
                    html {
                        height: -webkit-fill-available;
                    }


            /*                                     * {
                        border: 1px solid #f00 !important;
                    }    */
                     
                `}
            />

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&family=B612:wght@400;700&family=Dosis:wght@300;400;700&display=swap" rel="stylesheet" />

                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>

        <Header />


        {transitions((props, item) => {
            const dataitem = state.source.get(state.router.link)
                return(
                    <animated.div style={props}>
                                <Switch location={item}>
                                    <Home when={dataitem.isHome} />
                                    <Product when={dataitem.isProducts}/>
                                    {state.router.link === "/contact/" && <Contact />}

                                    </Switch>
                    </animated.div>

                )   
            }
        )} 

        <CertificacionSocialMedia />

        <Footer title={"Proalse Perú SAC"}/>
      </>
    );
  };

  export default connect(Root);