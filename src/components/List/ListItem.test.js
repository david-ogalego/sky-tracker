import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('Exist ListItem component', () => {
    const ListItemWrapper = shallow(<ListItem from={''} to={''} date={''} time={''} price={''} />);
    expect(ListItemWrapper.find('li').exists()).toBe(true);
  });
});
