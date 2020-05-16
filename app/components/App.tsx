import React from 'react';
import { hot } from 'react-hot-loader/root';
import CSSModules from 'react-css-modules';
import Hello from './TypedApp';

import styles from './App.pcss';

const App = () => (
  <main styleName='main'>
    <Hello compiler='ts' framework='react' />
  </main>
);

export default hot(CSSModules(App, styles, { allowMultiple: true }));
