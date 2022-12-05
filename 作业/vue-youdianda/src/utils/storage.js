const TOKEN_NAME = 'YDDToken'

export const setStorageToken = (payload) => {
  localStorage.setItem(TOKEN_NAME, JSON.stringify(payload))
}

export const getStorageToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_NAME)) || ''
}

export const removeStorageToken = () => {
  localStorage.removeItem(TOKEN_NAME)
}

// 保存用户信息
export const setStorageUserInfo = (payload) => {
  localStorage.setItem('YDDUserInfo', JSON.stringify(payload))
}

// 获取用户信息
export const getStorageUserInfo = () => {
  return JSON.parse(localStorage.getItem('YDDUserInfo')) || {}
}

// 删除用户信息
export const removeStorageUserInfo = () => {
  localStorage.removeItem('YDDUserInfo')
}
