import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../components/errorBoundary';
import { MockErrorComponent } from './__mocks__/error';

describe('ErrorBoundary:', () => {
  let spyConsoleError: jest.SpyInstance;

  beforeEach(() => {
    spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    spyConsoleError.mockRestore();
  });

  test('No errors', () => {
    render(
      <ErrorBoundary>
        <div>test</div>
      </ErrorBoundary>
    );
    const childrenComponent = screen.getByText(/test/i);
    expect(childrenComponent).toBeInTheDocument();
  });

  test('Error ocurred', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');

    render(
      <ErrorBoundary>
        <MockErrorComponent />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText('Error has occured');
    expect(errorMessage).toBeInTheDocument();
  });
});
