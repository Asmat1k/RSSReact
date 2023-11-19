import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import Pagination from '../components/pagination';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Pagination:', () => {
  test('Renders buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    );

    const wrapper = container.querySelector('.wrapper');
    expect(wrapper).toBeInTheDocument();

    const buttons = container.querySelectorAll('.button');
    expect(buttons).toHaveLength(2);
  });
});
