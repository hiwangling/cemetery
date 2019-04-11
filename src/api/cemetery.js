import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/CemeteryGardenList',
    method: 'get',
    params
  })
}

export function CemeteryAreaList(params) {
  return request({
    url: '/CemeteryAreaList',
    method: 'get',
    params
  })
}

export function CemeteryList(params) {
  return request({
    url: '/CemeteryList',
    method: 'post',
    params
  })
}

export function CemeteryStyleList(params) {
  return request({
    url: '/CemeteryStyleList',
    method: 'post',
    params
  })
}

export function CemeteryTypeList(params) {
  return request({
    url: '/CemeteryTypeList',
    method: 'post',
    params
  })
}

