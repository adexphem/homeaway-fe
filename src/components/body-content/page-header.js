import React from 'react';
import './page-header.css';

export default function PageHeader(props) {
  return (
    <div className="pageHeader">
      <div className="title">{props.title}</div>
    </div>
  );
}
