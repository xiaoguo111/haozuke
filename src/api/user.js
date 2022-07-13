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
