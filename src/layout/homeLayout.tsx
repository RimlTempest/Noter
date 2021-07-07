import React from 'react';
import { ReactNode } from 'react';
import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';
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
