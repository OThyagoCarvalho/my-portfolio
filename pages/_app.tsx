import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NavbarComponent from '../components/Navbar/Navbar';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>            
            <NavbarComponent />
            <Component {...pageProps} />   
            <Footer />         
        </NextUIProvider>
    );
}

export default MyApp;
