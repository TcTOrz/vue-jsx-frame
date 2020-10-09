import Cookies from 'js-cookie'

export default {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (Cookies.get('token')) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, res => {
      if (res.authenticated) {
        Cookies.set('token', res.token)
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return Cookies.get('token')
  },

  logout(cb) {
    Cookies.remove('token')
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!Cookies.get('token')
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'tctorz@qq.com' && pass === 'pass') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({
        authenticated: false
      })
    }
  }, 0);
}
