/* global fetch */

function getBaseUrl () {
  return window.location.protocol + '//' + window.location.host
}

async function callAPI (path) {
  const res = await fetch(getBaseUrl() + path)
  return res.json()
}

export async function getAccountInfo (name) {
  const apiURL = '/api/v1/accounts/' + name
  const info = await callAPI(apiURL)
  //   shared.debug('getAccountInfo', name, info)
  return info
}

export async function getChannelInfo (name) {
  const apiURL = '/api/v1/video-channels/' + name
  const info = await callAPI(apiURL)
  //   shared.debug('getChannelInfo', name, info)
  return info
}

export async function getVideoInfo (name) {
  const apiURL = '/api/v1/videos/' + name
  const info = await callAPI(apiURL)
  //   shared.debug('getVideoInfo', name, info)
  return info
}