import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';
import ErrorPage from '../components/errorBoundary/404';
import DetailedItem from '../components/detailed-item';

describe('Error page', () => {
  test('Incorrect URL', async () => {
    render(
      <MemoryRouter initialEntries={['/incorrecturl']}>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="details/:name" element={<DetailedItem />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );
    const errorPageElement = await screen.findByText('Error has occured');

    expect(errorPageElement).toBeInTheDocument();
  });
});
