import { renderHook } from '@testing-library/react-hooks';
import { dataTest } from '../data/dataForTest';
import { useFetchYoutbeVideos } from '../hooks/useFetchYoutubeVideos';

test('useFetchYoutubeVideos performs GET request', async () => {
  const query = 'wizeline';

  const { result, waitForNextUpdate } = renderHook(() => useFetchYoutbeVideos(query));

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data.length).toEqual(dataTest.items.length);
  expect(result.current.loading).toBeFalsy();
});
