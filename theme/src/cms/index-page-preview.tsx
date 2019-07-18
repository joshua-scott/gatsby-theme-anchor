import React from 'react';

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
