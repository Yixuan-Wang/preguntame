import axios from 'axios'
import { useStorage } from '@vueuse/core'
import yaml from 'js-yaml'
import defaultEngines from '~/config/engines.yaml?raw'

export const giteeToken = useStorage<string>('gitee-token', '')
export const giteeGistID = useStorage<string>('gitee-gist-id', '')

const giteeGistApi = axios.create({
  baseURL: 'https://gitee.com/api/v5/gists/',
})

function parseFetchedFiles(files: any) {
  const engines = Object.values(yaml.load(files['engines.yaml']?.content ?? defaultEngines) as ConfigEngine)
  return {
    engines,
  }
}

export function syncGetDefaultGist() {
  const engines = Object.values(yaml.load(defaultEngines) as ConfigEngine)
  return {
    engines,
  }
}

export async function getGist() {
  if (!giteeToken) return Promise.reject(Error('Illegal Gitee token'))
  if (!giteeGistID) return Promise.reject(Error('Illegal Gitee gist ID'))
  return giteeGistApi.get(`${giteeGistID.value}/`, {
    params: {
      access_token: giteeToken.value,
    },
    validateStatus: status => status === 200,
  })
    .then(({ data }) => {
      const files = data?.files
      if (!files) return Promise.reject(Error('Malformed Gitee gist'))
      return Promise.resolve(parseFetchedFiles(files))
    })
    .catch((reason) => {
      return Promise.reject(Error(`Fetch error: ${reason}`))
    })
}
