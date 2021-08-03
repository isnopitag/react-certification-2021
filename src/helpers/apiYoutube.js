import axios from 'axios';

// const token = `AIzaSyDC8GrrZyXkL_NLwjtB6vuX0FTx1EujD7s`; //2
// const token = `AIzaSyBh_wEB13SW9RDrPPvrugSZkDKNjtdgVW0`; // 3
const token = `AIzaSyCTcb8YzlNXSvvue0NhNqqK7_rMWOgZhJ4`; // 4


export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: token,
};

export default axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/`,
});
