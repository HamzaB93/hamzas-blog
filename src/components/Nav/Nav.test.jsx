import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Nav from './Nav';

test('renders nav links', () => {
  const history = createMemoryHistory()
  const { getByText } = render(<Router history={history}><Nav /></Router>);
  
  const foodLink = getByText(/food/i);
  const gamesLink = getByText(/games/i);
  const comicsLink = getByText(/comics/i);

  expect(foodLink).toBeInTheDocument();
  expect(gamesLink).toBeInTheDocument();
  expect(comicsLink).toBeInTheDocument();
});
