import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../components/list';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: jest.fn(() => ({ pathname: '/details' })),
}));

jest.mock('../api/reduxApi', () => ({
  ...jest.requireActual('../api/reduxApi'),
  useSearchPeopleQuery: jest.fn(() => ({
    data: { results: [{ id: 1, name: 'John Doe' }] },
    isLoading: false,
  })),
}));

describe('List component', () => {
  test('Renders data', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <List />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('Navigates, when click on card', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <List />
        </Provider>
      </BrowserRouter>
    );
    const block = screen.getByText('John Doe');
    fireEvent.click(block!);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });

  test('Renders "Nothing was found..."', async () => {
    jest
      .spyOn(require('../api/reduxApi'), 'useSearchPeopleQuery')
      .mockReturnValueOnce({
        data: { results: [] },
        isLoading: false,
      });
    render(
      <BrowserRouter>
        <Provider store={setupStore()}>
          <List />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() =>
      expect(screen.getByText('Nothing was found...')).toBeInTheDocument()
    );
  });
});
