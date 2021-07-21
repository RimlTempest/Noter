import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import imageUploadNutton from './imageUploadButton.module.css';

type Props = {
    onChange: any;
};

const ImageUploadButton = ({ onChange }: Props) => {
    return (
        <Box margin={'10px'} marginTop={'20px'} textAlign={'end'}>
            <label htmlFor="md" className={imageUploadNutton.label}>
                画像
            </label>
            <Input
                id="md"
                type="file"
                accept="text/markdown,.md,.markdown"
                display="none"
                onChange={onChange}
            />
        </Box>
    );
};

export default ImageUploadButton;
