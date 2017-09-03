import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.pcss';

const App = props => <div styleName="main">hellooo</div>;

export default CSSModules(App, styles, { allowMultiple: true });
