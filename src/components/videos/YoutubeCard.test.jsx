import React from 'react';
import { YoutubeCard } from './YoutubeCard';
import { shallow } from 'enzyme';

import { videos } from '../../data/youtubeVideos';

describe('Testing on YoutubeCard Component', () => {
  const { items } = videos;

  const { snippet } = items[1];

  let wrapper = shallow(<YoutubeCard item={snippet} />);

  test('Should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should have a cardTitle tag with title from mock data", () => {
    const cardTitle = wrapper.find("cardTitle");
    expect(cardTitle.text().trim()).toBe(snippet.title);
  });

  test("Should have and img tag subcomponent with img from mock data", () => {
    const img = wrapper.find("img");
    expect(img.prop('src')).toBe(snippet.thumbnails.medium.url);
  });
});