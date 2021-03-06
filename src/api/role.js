import request from '@/utils/request'

export function listRole(query) {
  return request({
    url: '/branch/list',
    method: 'post',
    params: query
  })
}

export function createRole(data) {
  return request({
    url: '/branch/add',
    method: 'post',
    data
  })
}

export function readRole(data) {
  return request({
    url: '/role/read',
    method: 'get',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/role/update',
    method: 'post',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: '/role/delete',
    method: 'post',
    data
  })
}

export function getPermission(query) {
  return request({
    url: '/auth_rule/all',
    method: 'get',
    params: query
  })
}

export function updatePermission(data) {
  return request({
    url: '/branch/auth',
    method: 'post',
    data
  })
}

export function roleOptions(query) {
  return request({
    url: '/branch/all_name',
    method: 'post',
    params: query
  })
}
