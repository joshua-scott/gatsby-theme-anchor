import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Text } from 'rebass';

const renderers = {
  paragraph: ({ children }) => (
    <Text fontSize={3} lineHeight={1.3} my={3}>
      {children}
    </Text>
  ),
  listItem: ({ children }) => (
    <Text as="li" fontSize={3} lineHeight={1.3} my={2}>
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
