import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../components/item';
import { BrowserRouter } from 'react-router-dom';

const data = {
  name: 'Luke',
  gender: 'Male',
  height: '180',
  skin_color: '-',
  hair_color: '-',
  mass: '70',
  birth_year: '2003',
};

describe('Item in list:', () => {
  test('Renders name', () => {
    render(<Item data={data} myKey={123} />, { wrapper: BrowserRouter });
    const itemElement = screen.getByText(/luke/i);

    expect(itemElement).toBeInTheDocument();
  });

  test('Renders gender', () => {
    render(<Item data={data} myKey={123} />, { wrapper: BrowserRouter });
    const itemElement = screen.getByText(/male/i);

    expect(itemElement).toBeInTheDocument();
  });

  test('Renders height', () => {
    render(<Item data={data} myKey={123} />, { wrapper: BrowserRouter });
    const itemElement = screen.getByText(/180/i);

    expect(itemElement).toBeInTheDocument();
  });

  test('Renders mass', () => {
    render(<Item data={data} myKey={123} />, { wrapper: BrowserRouter });
    const itemElement = screen.getByText(/70/i);

    expect(itemElement).toBeInTheDocument();
  });

  test('Renders birth year', () => {
    render(<Item data={data} myKey={123} />, { wrapper: BrowserRouter });
    const itemElement = screen.getByText(/2003/i);

    expect(itemElement).toBeInTheDocument();
  });
});
