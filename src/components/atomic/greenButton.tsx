import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
    children: ReactNode;
    onClick: any;
};

const GreenButton = ({ children, onClick }: Props) => {
    return (
        <Button
            fontSize={'sm'}
            // fontWeight={600}
            color={'white'}
            bg={'green.400'}
            _hover={{
                bg: 'green.300',
            }}
            minWidth={'max'}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default GreenButton;
