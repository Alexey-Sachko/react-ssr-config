import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './template';

function renderHtml(req, res) {
  const context = {};
  const appString = renderToString(
    <StaticRouter
      location={req.url}
      context={context}>
      <App />
    </StaticRouter>
  );
  res.send(template({
    body: appString,
    title: 'REACT SSR'
  }));
} 

export default renderHtml;
