import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import Search from '../components/search';
import { updateNumber } from '../store/reducers/dataSlice';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Search:', () => {
  test('Saves on text input blur', async () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/Type StarWars character.../i);
    const inputValue = 'Luke Skywalker';

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.blur(input);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'lastSearch',
      inputValue
    );
  });
  test('Update number on number input blur;', async () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    const input = screen.getByDisplayValue(/10/i);
    const newNum = 5;

    fireEvent.change(input, { target: { value: newNum } });

    const result = updateNumber(newNum);

    expect(result.payload).toEqual(5);
    expect(mockDispatch).toHaveBeenCalled();
  });
  test('Saves on button click;', async () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/Type StarWars character.../i);
    const inputValue = 'test';
    const btn = screen.getByText(/Search/i);

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(btn);

    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
