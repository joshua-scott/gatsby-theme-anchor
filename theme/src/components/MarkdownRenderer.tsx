import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Text } from 'rebass';

const renderers = {
  paragraph: ({ children, ...rest }) => (
    <Text fontSize={3} lineHeight={1.3} my={3} {...rest}>
      {children}
    </Text>
  ),
  listItem: ({ children, ...rest }) => (
    <Text as="li" fontSize={3} lineHeight={1.3} my={2} {...rest}>
      {children}
    </Text>
  ),
};

type Props = {
  markdown: string;
};

const MarkdownRenderer = ({ markdown }: Props) => (
  <ReactMarkdown renderers={renderers} source={markdown} />
);

export default MarkdownRenderer;
