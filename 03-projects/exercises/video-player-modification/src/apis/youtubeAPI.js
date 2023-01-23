import axios from 'axios'

const key = 'AIzaSyDVTmRwQNreet_K7uRx7VoAukjEYa0ZDq0'

export const defaultParams = {
  part: 'snippet',
  maxResults: 12, 
  key,
}

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
