import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import DetailedItem from '../components/detailed-item';
import { mockLoaderData } from './__mocks__/data';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: jest.fn(),
  useLoaderData: jest.fn(() => mockLoaderData),
}));

describe('DetailedItem component:', () => {
  test('Renders detailed card info', () => {
    render(
      <BrowserRouter>
        <DetailedItem />
      </BrowserRouter>
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Year: 19BBY')).toBeInTheDocument();
    expect(screen.getByText('Skin: fair')).toBeInTheDocument();
    expect(screen.getByText('Height: 172 cm')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77 kg')).toBeInTheDocument();
    expect(screen.getByText('Hair: blond')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  test('Close element', async () => {
    render(
      <BrowserRouter>
        <DetailedItem />
      </BrowserRouter>
    );

    const closeButton = screen.getByText('x');
    fireEvent.click(closeButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});
