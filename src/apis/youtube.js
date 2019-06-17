import axios from "axios";

// Assign your key below
const KEY = "YOUR_GOOGLE_API_KEY_HERE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
