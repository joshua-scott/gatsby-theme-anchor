import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  source: string;
};

// TODO: define renderes using theme-ui

const Markdown = ({ source }: Props) => <ReactMarkdown source={source} />;

export default Markdown;
