import request from '@/utils/request'

export function listReserve(query) {
  return request({
    url: '/ReserveList',
    method: 'get',
    params: query
  })
}

export function createReserve(data) {
  return request({
    url: '/reserve/create',
    method: 'post',
    data
  })
}

export function readReserve(data) {
  return request({
    url: '/reserve/read',
    method: 'get',
    data
  })
}

export function updateReserve(data) {
  return request({
    url: '/reserve/update',
    method: 'post',
    data
  })
}

export function deleteReserve(data) {
  return request({
    url: '/reserve/delete',
    method: 'post',
    data
  })
}
