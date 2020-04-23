import React from 'react';
import { render } from '@testing-library/react';

import App from '../components/App';

describe('App component is mounted', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
