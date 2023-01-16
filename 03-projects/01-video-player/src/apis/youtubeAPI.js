import axios from 'axios'

const key = 'AIzaSyCNYVz2WNwMqpivd2MuXi4bIlnnDUZhVXg'

export const defaultParams = {
  part: 'snippet',
  maxResults: 12,
  key,
}

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
