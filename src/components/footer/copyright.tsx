import { Text } from '@chakra-ui/layout';
import * as React from 'react';

type Props = {
    text: string;
};

export const Copyright = (props: Props) => (
    <Text>
        &copy; {new Date().getFullYear()} {props.text}. All rights reserved.
    </Text>
);
