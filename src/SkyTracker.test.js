import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';

describe('<App />', () => {
  it('Exist App components', () => {
    const AppComponent = shallow(<App />);
    expect(AppComponent.find(SearchBar).exists()).toBe(true);
    expect(AppComponent.find(List).exists()).toBe(true);
  });
});

