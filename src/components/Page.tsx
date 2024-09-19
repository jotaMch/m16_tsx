import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './header';
import About from './about';
import Products from './cardProduct';
import Footer from './footer';

const Page: React.FC = () => {
    return (
        <Box bg="#e1e1e1">
            <Header />
            <Box w="80%" mx="auto">
                <About />
                <Products />
            </Box>
            <Footer />
        </Box>
    );
};

export default Page;
