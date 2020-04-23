import React from 'react';
import { hot } from 'react-hot-loader/root';
import CSSModules from 'react-css-modules';
import Hello from './TypedApp';

import styles from './App.pcss';

const App = () => (
  <div styleName='main'>
    <Hello compiler='ts' framework='react' />
  </div>
);

export default hot(CSSModules(App, styles, { allowMultiple: true }));
