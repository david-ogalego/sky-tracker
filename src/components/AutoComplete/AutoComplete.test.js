import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import AutocompleteReact from 'react-autocomplete';
import AutoComplete from './AutoComplete';

describe('<Autocomplete />', () => {
  test('Exist Autocomplete component', () => {
    const AutoCompleteWrapper = shallow(<AutoComplete />);
    expect(AutoCompleteWrapper.find(AutocompleteReact).exists()).toBe(true);
  });
});

describe('<Autocomplete change/>', () => {
  it('Autocomplete change value length > 1', (done) => {
    const promiseChange = new Promise(() => {
      done();
    });
    const handleOnChange = () => promiseChange;
    const AutoCompleteWrapper = shallow(<AutoComplete onChange={handleOnChange} />);
    AutoCompleteWrapper.state().value = 'Ba';
  });
});
