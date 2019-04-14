import request from '@/utils/request'
export function Schedulelist(query) {
  return request({
    url: '/Schedulelist',
    method: 'get',
    params: query
  })
}