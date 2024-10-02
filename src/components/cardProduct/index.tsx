import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { ButtonComponent } from '../button/Button';

interface Product {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    image: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <Flex gap={{ base: 4, md: 4, lg: 4 }} wrap={'wrap'}>
            {products.map((item) => (
                <Card key={item.id} w={{ base: '100%', md: 100, lg: '31.3%' }}>
                    <CardBody>
                        <Image
                            w={'100%'}
                            h={300}
                            src={item.image}
                            alt={item.nome}
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md">{item.nome}</Heading>
                            <Text>{item.descricao}</Text>
                            <Text color="blue.600" fontSize="2xl">
                                ${item.preco}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonComponent 
                        text="Enviar" 
                        w="200px" 
                        h="50px" 
                        bgColor="green" 
                        color="#fff" 
                        fontSize="18px" 
                        b="none" 
                        margin='20px 0'
                        br="12px"
                        
                    />
                    </CardFooter>
                </Card>
            ))}
        </Flex>
    );
};

export default Products;
