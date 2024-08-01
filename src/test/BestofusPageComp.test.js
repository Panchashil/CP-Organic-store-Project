import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // For routing
import BestofusPageComp from '../List/BestofusPageComp';

test('renders BestofusPageComp component', () => {
  render(
    <Router>
      <BestofusPageComp />
    </Router>
  );

  // Check if certain elements are present in the document
  expect(screen.getByText(/Organic Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Best For your Health/i)).toBeInTheDocument();
  expect(screen.getByText(/Visit Again/i)).toBeInTheDocument();

  // Check if some buttons or links are present
  const addToCartLinks = screen.getAllByRole('link', { name: /Add to cart/i });
  expect(addToCartLinks).toHaveLength(12); // Adjust the length based on the expected number of links
  addToCartLinks.forEach(link => {
    expect(link).toBeInTheDocument();
  });

  const loginLink = screen.getByRole('link', { name: /Login/i });
  expect(loginLink).toBeInTheDocument();

  // Check if some cards are present
  expect(screen.getByText(/Corn/i)).toBeInTheDocument();
  expect(screen.getByText(/chiaseedoil/i)).toBeInTheDocument();
  expect(screen.getByText(/Blueberry/i)).toBeInTheDocument();
  // Add more checks as needed for other cards
});
