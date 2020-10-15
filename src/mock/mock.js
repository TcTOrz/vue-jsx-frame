import Mock from 'mockjs'

function loginMock() {
  const loginData = Mock.mock({
    "userName": "@cname",
    "userId": "@integer(10000,99999)",
    "passward" : /[a-z][A-Z][0-9][a-z][A-Z][0-9][a-z][A-Z][0-9]/,
  })
  return loginData
}

export { loginMock }