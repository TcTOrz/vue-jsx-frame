import Mock from 'mockjs'

import {loginMock} from './mock'

Mock.setup({
  timeout: '500-1000'
})

Mock.mock(process.env.VUE_APP_URL+'/api/login', 'get', loginMock)