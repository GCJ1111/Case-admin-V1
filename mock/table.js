const Mock = require('mockjs')

const name_list = ['张三', '李四', '王五', '赵六']

const data = Mock.mock({
  'items|5-13': [{
    id: '@id',
    title: '@sentence(2, 3)',
    'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    'author|1': name_list,
    display_time: '@datetime',
    pageviews: '@integer(300, 500)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
