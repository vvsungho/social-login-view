import Cookies from 'js-cookie'

const cookie = {
  getCookie: function(key) {
    return Cookies.get(key) !== 'null' ? Cookies.get(key) : null
  },
  setCookie: function(key, value, expire) {
    if (expire) {
      return Cookies.set(key, value, { expires: expire })
    } else {
      return Cookies.set(key, value)
    }
  },
  getArrayCookie: function(key) {
    return Cookies.get(key) !== 'undefined' ? Cookies.get(key) : []
  },
  removeCookie: function(key) {
    return Cookies.remove(key)
  }
}

export default cookie
