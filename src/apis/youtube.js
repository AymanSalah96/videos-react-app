import axios from "axios";

const KEY = "AIzaSyCEI0cCaSzdk00Jjjmt2u-J5r1ntqkUlM4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
