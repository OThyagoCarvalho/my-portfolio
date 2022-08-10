import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <Header/>
            <Component {...pageProps} />   
            <Footer />         
        </NextUIProvider>
    );
}

export default MyApp;
