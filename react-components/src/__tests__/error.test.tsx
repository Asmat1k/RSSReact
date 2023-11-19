import { render, fireEvent } from '@testing-library/react';
import ErrorButton from '../components/errorButton';
import '@testing-library/jest-dom';

describe('Error button:', () => {
  let spyConsoleError: jest.SpyInstance;

  beforeEach(() => {
    spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    spyConsoleError.mockRestore();
  });
  it('should throw an error when clicked', () => {
    const { getByText } = render(<ErrorButton />);
    const buttonElement = getByText('error');

    expect(() => {
      fireEvent.click(buttonElement);
    }).toThrow('Error test button clicked');
  });
});
