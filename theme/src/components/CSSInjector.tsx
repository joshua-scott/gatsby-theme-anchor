import React from 'react';
import { StyleSheetManager } from 'styled-components';

const CSSInjector = ({ children }) => {
  const iframe = document.querySelector('#nc-root iframe') as HTMLIFrameElement;
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>
  );
};

export default CSSInjector;
