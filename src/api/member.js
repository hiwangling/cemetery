import request from '@/utils/request'

export function memberList(data) {
  return request({
    url: 'Cemetery/memberList',
    method: 'post',
    data
  })
}

export function BranchList(data) {
  return request({
    url: 'Cemetery/BranchList',
    method: 'post',
    data
  })
}
 