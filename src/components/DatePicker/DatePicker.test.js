import React from 'react';
import { shallow } from 'enzyme';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  it('Exist DatePicker component', () => {
    const DatePickerWrapper = shallow(<DatePicker />);
    expect(DatePickerWrapper.find(DayPickerInput).exists()).toBe(true);
  });
});
