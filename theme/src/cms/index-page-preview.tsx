import React from 'react';
import { AboutTemplate } from '../templates/About';

const IndexPagePreview = ({ entry, widgetFor }) => {
  console.log(entry);

  return (
    <AboutTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default IndexPagePreview;
