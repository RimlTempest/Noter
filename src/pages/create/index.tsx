import React from 'react';
import {
    Box,
    Heading,
    Container,
    Text,
    Textarea,
    Button,
    Stack,
    Flex,
    Collapse,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
// Markdown
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
    CodeComponent,
    ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react';
// components
import HomeLayout from 'src/layout/homeLayout';
import GreenButton from 'src/components/atomic/greenButton';
import create from './create.module.css';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
    inline,
    className,
    children,
    ...props
}) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            style={base16AteliersulphurpoolLight}
            language={match[1]}
            PreTag="div"
            {...props}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

const Create = () => {
    const [value, setValue] = React.useState('');
    const [isOpenTextArea, setOpenTextArea] = React.useState(true);
    const { colorMode } = useColorMode();

    const handleInputChange = (e: any) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    const openTextAreaChenge = () => {
        setOpenTextArea(!isOpenTextArea);
    };

    const addHeading = () => {
        const sample = '\n# Title';
        setValue(value + sample);
    };

    const addEmphasis = () => {
        const sample = '\n*強調したい文字*';
        setValue(value + sample);
    };

    const addList = () => {
        const sample = '\n- リスト\n    - item1\n    - item2\n    - item3';
        setValue(value + sample);
    };

    const addQuote = () => {
        const sample = '\n> 引用しました';
        setValue(value + sample);
    };

    const addHorizon = () => {
        const sample = '\n---';
        setValue(value + sample);
    };

    const addLink = () => {
        const sample = '\n[blog](https://www.riml.work)';
        setValue(value + sample);
    };

    const addSourceCode = () => {
        const sample =
            "\n```js\nconst test = 'HelloWorld';\nconsole.log(test);\n```";
        setValue(value + sample);
    };

    const components = {
        code: CodeBlock,
    };

    return (
        <HomeLayout>
            <Container maxW={'3xl'}>
                <Flex flexDirection="column">
                    <Flex justifyContent="flex-end" margin={5}>
                        <Button
                            variant="solid"
                            size="md"
                            onClick={openTextAreaChenge}
                        >
                            テキストエリアを
                            {!isOpenTextArea ? '表示' : '非表示に'}
                            する
                        </Button>
                    </Flex>
                    <Collapse in={isOpenTextArea} animateOpacity>
                        <Flex flexDirection="column">
                            <Flex
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="stretch"
                            >
                                <Text fontSize="2xl" marginBottom={2}>
                                    テキストエリア
                                </Text>
                                <Box marginBottom={2} overflowX={'scroll'}>
                                    <Stack
                                        direction="row"
                                        spacing={4}
                                        margin={2}
                                    >
                                        <GreenButton onClick={addHeading}>
                                            見出し
                                        </GreenButton>
                                        <GreenButton onClick={addEmphasis}>
                                            強調
                                        </GreenButton>
                                        <GreenButton onClick={addList}>
                                            リスト
                                        </GreenButton>
                                        <GreenButton onClick={addQuote}>
                                            引用
                                        </GreenButton>
                                        <GreenButton onClick={addHorizon}>
                                            水平線
                                        </GreenButton>
                                        <GreenButton onClick={addLink}>
                                            リンク
                                        </GreenButton>
                                        <GreenButton onClick={addSourceCode}>
                                            ソースコード
                                        </GreenButton>
                                    </Stack>
                                </Box>
                                <Textarea
                                    value={value}
                                    onChange={handleInputChange}
                                    placeholder="Markdown形式で文字を表示する"
                                    rows={20}
                                />
                            </Flex>
                        </Flex>
                    </Collapse>
                </Flex>
                <Stack
                    as={Box}
                    // textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                    marginBottom={5}
                    color={useColorModeValue('gray.800', 'white.300')}
                >
                    <Text fontSize="2xl" marginBottom={2}>
                        プレビューエリア
                    </Text>
                    <div className="markdown-body p-3">
                        <ReactMarkdown
                            className={
                                colorMode === 'dark' ? create.markdown_body : ''
                            }
                            remarkPlugins={[gfm]}
                            components={components}
                        >
                            {value}
                        </ReactMarkdown>
                    </div>
                </Stack>
            </Container>
        </HomeLayout>
    );
};

export default Create;
