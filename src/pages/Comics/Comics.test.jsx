import React from 'react';
import { render } from '@testing-library/react';
import Comics from './Comics';

test('renders title', () => {
  const { getByText } = render(<Comics/>);

  const header = getByText(/comics/i);

  expect(header).toBeInTheDocument();
});
