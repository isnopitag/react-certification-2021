import React from 'react';
import { shallow } from 'enzyme';
import { YoutubeCard } from './YoutubeCard';

import { videos } from '../../data/youtubeVideos';

describe('Testing on YoutubeCard Component', () => {
  const { items } = videos;

  const { snippet } = items[1];

  const wrapper = shallow(<YoutubeCard item={snippet} />);

  test('Should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have a cardTitle tag with title from mock data', () => {
    const cardTitle = wrapper.find('cardTitle');
    expect(cardTitle.text().trim()).toBe(snippet.title);
  });

  test('Should have and img tag subcomponent with img from mock data', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(snippet.thumbnails.medium.url);
  });
});
