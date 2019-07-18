import React from 'react';
import PropTypes from 'prop-types';

import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor }) => {
  console.log(entry);

  return (
    <div>
      <p>{entry.getIn(['data', 'title'])}</p>
      {widgetFor('body')}
    </div>
  );
};

export default IndexPagePreview;
