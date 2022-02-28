/*!
 * wangdongmei 2020-10-28
 * 常量
 */
const constant = {
  tableTenantH: window.innerHeight - 263, // 租户初始化table高度
  tableFormH: window.innerHeight - 232, // 头部有form表单的table
  tableSearchPageH: window.innerHeight - 165, // 列表有搜索按钮栏、分页的table高度
  tableSearchH: window.innerHeight - 135, // 列表有搜索按钮栏、无分页的table高度
  tableSearchPageTabH: window.innerHeight - 200, // 列表有搜索按钮栏、分页、tab的table高度
  tableLeftH: window.innerHeight - 126, // 左侧小table
  leftH: window.innerHeight - 93, // 左侧小table
  menuBg: '#101125',
  province: '320105000',
  userYear: '2021',
  system: [
    {label: '基础信息', value: 'bim'},
    {label: '银行账户', value: 'bams'},
    {label: '政府预算管理', value: 'gbdm'},
    {label: '项目支出绩效管理', value: 'pmkpi0'},
    {label: '绩效管理', value: 'pmkpi'},
    {label: '部门预算', value: 'bdm'},
    {label: '项目库', value: 'pdm'}
  ],
  year: [
    {
      value: '2019',
      label: '2019'
    }, {
      value: '2020',
      label: '2020'
    }, {
      value: '2021',
      label: '2021'
    }
  ],
  whether: [
    {value: '0', label: '否'},
    {value: '1', label: '是'}
  ],
  message: {
    optN: '请选择一条数据！',
    del: '此操作将删除该条信息, 是否继续?',
    delO: '请选择一条数据进行删除！',
    delS: '删除成功！',
    examine: '您是否确定审核？',
    examineS: '审核通过！',
    editO: '请选择一条数据进行编辑！',
    editS: ' 修改成功！',
    addS: ' 新增成功！'
  },
  serialType: ['1-常量', '2-年', '3-月', '4-日', '5-序列', '6-业务字段编码', '7-业务字段名称', '8-业务字段简称', '9-银行机构编码', '10-预算年度', '11-执行年度']
};
export default constant
