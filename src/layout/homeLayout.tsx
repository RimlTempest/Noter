import React from 'react';
import { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

type Props = {
    children: ReactNode;
};

const HomeLayout = (props: Props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default HomeLayout;
