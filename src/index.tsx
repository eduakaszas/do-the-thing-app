import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './components/Root';

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

rootElement.render(<Root />);
