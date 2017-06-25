import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('<List />', () => {
  it('Exist List component', () => {
    const ListWrapper = shallow(<List listItems={[]} />);
    expect(ListWrapper.find('ul').exists()).toBe(true);
  });
});
