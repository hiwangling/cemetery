import request from '@/utils/request'

export function memberList(data) {
  return request({
    url: '/memberList',
    method: 'post',
    data
  })
}

export function BranchList(data) {
  return request({
    url: '/BranchList',
    method: 'post',
    data
  })
}
 