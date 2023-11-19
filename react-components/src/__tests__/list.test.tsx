import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../components/list';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(() => ({ pathname: '/details' })),
}));

jest.mock('../api/reduxApi', () => ({
  ...jest.requireActual('../api/reduxApi'),
  useSearchPeopleQuery: jest.fn(() => ({
    data: { results: [{ id: 1, name: '' }] },
    isLoading: true,
  })),
}));

describe('List component', () => {
  test('renders loading spinner while data is loading', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <List />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
