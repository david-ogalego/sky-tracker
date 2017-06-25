import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import AutoComplete from '../AutoComplete/AutoComplete';
import DatePicker from '../DatePicker/DatePicker';

describe('<SearchBar />', () => {
  it('Exist SearchBar component', () => {
    const SearchBarWrapper = shallow(<SearchBar />);
    expect(SearchBarWrapper.find(AutoComplete)).toHaveLength(2);
    expect(SearchBarWrapper.find(DatePicker)).toHaveLength(2);
  });
});
