import { Box, Button, Flex, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import React from 'react';

const Header: React.FC = () => {
    return (
        <Box
            color="#fff"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            bg='#5d6d5d'
            w="100%"
            py={4}
        >
            <Flex
                gap={4}
                mx={8}
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                justifyContent="space-between"
                align="center"
            >
                <Text fontSize="md">JGM</Text>
                <UnorderedList listStyleType="none" alignItems={'center'} display="flex" gap="4" m="0">
                    <ListItem>Sobre</ListItem>
                    <ListItem>Produtos</ListItem>
                    <ListItem>Contato</ListItem>
                    <Stack direction="row" spacing={4}>
                        <Button
                            w={[90, 100, 150]}
                            fontSize={{ base: 10, md: 12, lg: 16 }}
                            leftIcon={<CiStar />}
                            py={8}
                            border='none'
                            rounded='8px'
                            color='#fff'
                            bg='#010700'
                            variant="outline"
                        >
                            Favoritos
                        </Button>
                        <Button
                            w={[90, 100, 150]}
                            fontSize={{ base: 10, md: 12, lg: 16 }}
                            rightIcon={<FaShoppingBag />}
                            py={8}
                            border='none'
                            rounded='8px'
                            color='#fff'
                            bg='#010700'
                            variant="solid"
                        >
                            Sacola
                        </Button>
                    </Stack>
                </UnorderedList>
            </Flex>
        </Box>
    );
};

export default Header;
