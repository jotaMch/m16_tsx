import { Box, Button, Container, Flex, Image, Stack, Text } from '@chakra-ui/react';

const About: React.FC = () => {
    return (
        <Flex w={'100%'} justifyContent="space-between" alignItems={'center'} flexDirection="column-reverse" py="14">
            <Stack
                direction="column"
                spacing={4}
                w={'80%'}
                textAlign={'center'}
                mx={'auto'}
                py={20}
            >
                <Text fontSize="2xl" fontWeight="800">
                    Aqui na JGM presamos pela qualidade dos produtos com foco no cliente.
                </Text>
                <Text color="#942">Adquira nossos melhores produtos em alta!</Text>
            </Stack>
            <Image
                boxShadow="dark-lg"
                rounded="xl"
                w={['100%', '80%', '70%']}
                h={[150, 60, 80]}
                mx={[0, 'auto', 'auto']}
                src="https://cdn.pixabay.com/photo/2021/10/07/20/46/playstation-6689793_1280.jpg"
                alt="Dan Abramov"
            />
        </Flex>
    );
};

export default About;
