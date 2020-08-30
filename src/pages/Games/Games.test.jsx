import React from 'react';
import { render } from '@testing-library/react';
import Games from './Games';

test('renders title', () => {
  const { getByText } = render(<Games/>);

  const header = getByText(/games/i);

  expect(header).toBeInTheDocument();
});
