import React from 'react';
import { render } from '@testing-library/react';
import { renderWithRedux } from './test-utils';
import SummaryCard from './SummaryCard';
import '@testing-library/jest-dom';

describe('SummaryCard Component', () => {
  test('applies correct border color styling based on props', () => {
    const { container } = render(<SummaryCard title="Test" value={5} color="red" />);
    const cardDiv = container.firstChild;
    expect(cardDiv).toHaveStyle('border-left: 5px solid #dc3545');
  });

  test('applies default border color when color is unknown', () => {
    const { container } = render(<SummaryCard title="Test" value={5} color="unknown" />);
    const cardDiv = container.firstChild;
    expect(cardDiv).toHaveStyle('border-left: 5px solid #007bff');
  });
});