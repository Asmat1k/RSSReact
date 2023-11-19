import { updateNumber, updateSearch } from '../store/reducers/dataSlice';

describe('REDUX:', () => {
  test('Should update search', () => {
    const newSearch = 'testig';

    const result = updateSearch(newSearch);

    expect(result.payload).toEqual(newSearch);
  });
  test('Should update number ', () => {
    const newNum = 10;

    const result = updateNumber(newNum);

    expect(result.payload).toEqual(newNum);
  });
});
