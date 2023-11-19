import searchApi from '../api/api';
import '@testing-library/jest-dom';

describe('API:', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Wrong request', async () => {
    global.fetch = jest.fn().mockRejectedValue('TEST ERROR');

    try {
      await searchApi('?search=test');
    } catch (error) {
      expect(consoleSpy).toHaveBeenCalledWith('Error is occured!');
    }
  });

  test('Good request', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ results: [] }),
    } as Response);

    await searchApi('?search=test');

    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
