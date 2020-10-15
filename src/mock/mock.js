import Mock from 'mockjs'

function loginMock() {
  const loginData = Mock.mock({
    "userName": "@cname",
    "userId": "@integer(10000,99999)",
    "passward" : /[a-z][A-Z][0-9][a-z][A-Z][0-9][a-z][A-Z][0-9]/,
  })
  return loginData
}

// 网元配置/设备列表-table
function networkEquipTableMock() {
  const data = Mock.mock({
    "array|100-200": [
      {
        "设备ID": '@natural(0, 100)',
        "直放站编号": '@natural(100000, 999999)',
        "设备编号": '@natural(0, 255)',
        "设备名称": '@csentence(3, 20)',
        "设备状态": '@pick(["正常", "未知"])',
        "设备电话": '',
        "设备IP": '',
        "查询电话": '',
        "供应商": '',
        "设备类型": '',
        "协议类型": '',
        "备注": ''
      }
    ]
  })
  return data
}

export { loginMock, networkEquipTableMock }