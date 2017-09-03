import App from './../app/components/App';
import React from 'react';
import { shallow } from 'enzyme';

test('App component is mounted', () => {
    expect(shallow(<App />).contains(<div className="main">hellooo</div>)).toBe(true);
});
