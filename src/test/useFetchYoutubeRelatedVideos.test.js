import { renderHook } from "@testing-library/react-hooks";
import { dataTestRelated } from "../data/dataForTest";
import { useFetchYoutbeRelatedVideos } from "../hooks/useFetchYoutubeRelatedVideos";

test("useFetchYoutbeRelatedVideos performs GET request", async () => {
    
    
    const idVideo = 'nmXMgqjQzls'
  
    const { result, waitForNextUpdate } = renderHook(() =>
        useFetchYoutbeRelatedVideos(idVideo)
    );
  
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();
  
    await waitForNextUpdate();
  
    expect(result.current.data.length).toEqual(dataTestRelated.items.length);
    expect(result.current.loading).toBeFalsy();
  });