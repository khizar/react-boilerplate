import React from 'react';
import { hot } from 'react-hot-loader/root';
import CSSModules from 'react-css-modules';

import styles from './App.pcss';

const App = () => <div styleName='main'>hellooo</div>;

export default hot(CSSModules(App, styles, { allowMultiple: true }));
