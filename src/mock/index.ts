import Mock from 'mockjs'
let testData = require('@/untils/test.json')

Mock.setup({
  timeout: '200 - 400'
})

Mock.mock(/\/data/, 'get', testData)

export default Mock
