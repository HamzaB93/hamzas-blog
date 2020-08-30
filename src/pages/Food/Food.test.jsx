import React from 'react';
import { render } from '@testing-library/react';
import Food from './Food';

test('renders title', () => {
  const { getByText } = render(<Food/>);

  const header = getByText(/Food/i);

  expect(header).toBeInTheDocument();
});
