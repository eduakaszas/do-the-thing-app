import React from 'react';

import { useStyles } from './useStyles';

export default function App() {
  const css = useStyles();

  return <div className={css.container}>Hello world</div>;
}
