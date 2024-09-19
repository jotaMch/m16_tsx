import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <Flex align={'center'} justifyContent={'center'} h={20} mt={20} bg={'#b3b3b3'}>
            <Text>Todos os direitos reservados, JGM 2024.</Text>
        </Flex>
    );
};

export default Footer;
