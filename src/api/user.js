import request from '@/utils/request'
/**
 * 用户登录
 */
export const loginApi = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password }
  })
}
export const userApi = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}
export const getlist = () => {
  return request({
    url: '/user/favorites'
  })
}
export const getfangyuan = () => {
  return request({
    url: '/user/houses'
  })
}
export const getzufang = () => {
  return request({
    url: '/home/groups'
  })
}
export const getcity = () => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}
export const gethot = () => {
  return request({
    url: '/area/hot'
  })
}
