import request from '@/utils/request'

export function listAdmin(query) {
  return request({
    url: '/branch/list',
    method: 'post',
    params: query
  })
}

export function createAdmin(data) {
  return request({
    url: '/branch/create',
    method: 'post',
    data
  })
}

export function readminAdmin(data) {
  return request({
    url: '/branch/readmin',
    method: 'get',
    data
  })
}

export function updateAdmin(data) {
  return request({
    url: '/branch/update',
    method: 'post',
    data
  })
}

export function deleteAdmin(data) {
  return request({
    url: '/branch/delete',
    method: 'post',
    data
  })
}
