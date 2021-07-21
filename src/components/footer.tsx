import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';

import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import SocialButton from './atomic/socialButton';
import { Copyright } from './footer/copyright';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            pos={'fixed'}
            width={'100%'}
            bottom={0}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Copyright text="Riml" />
                <Stack direction={'row'} spacing={6}>
                    <SocialButton
                        label={'Twitter'}
                        href={'https://twitter.com/Fande4d'}
                    >
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton
                        label={'YouTube'}
                        href={
                            'https://www.youtube.com/channel/UCc_EAsEp12Gwf9C3vVlj6Rg'
                        }
                    >
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton
                        label={'Github'}
                        href={'https://github.com/RimlTempest'}
                    >
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
