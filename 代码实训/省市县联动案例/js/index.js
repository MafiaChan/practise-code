//封装 获取元素的函数
// function qs(ele) {
//     return document.querySelector(ele)
// }

//简化上面函数
const qs = (element) => document.querySelector(element)

// console.log(qs('#province'))
// 接口地址：https://www.apifox.cn/apidoc/shared-36f0cbc0-9064-44bc-850a-805e263bf494/api-25827426
axios.defaults.baseURL = 'http://124.223.14.236:3001/api'

//封装省的数据和渲染
async function getProvinceData() {
    //渲染所有省的数据
    const {data: res} = await axios.get('/city/province')
    // console.log(res.data)

    //渲染省份选择框
    const provinceStr = res.data.map(item => `<option value="${item.province}">${item.name}</option>`).join('')
    // console.log(provinceStr)

    qs('#province').innerHTML = '<option value="">请选择省份</option>' + provinceStr
}

//封装市的数据和渲染
async function getCityData(provinceCode) {
    //获取安徽省下所有市的数据
    const {data: {data: cityData}} = await axios.get('/city/city', {
        params: {
            provinceCode
        }
    })
    // console.log(cityData)

    //渲染城市选择框
    const cityStr = cityData.map(item => `<option value="${item.city}">${item.name}</option>`).join('')
    // console.log(cityStr)

    qs('#city').innerHTML = '<option value="">请选择城市</option>' + cityStr
}

//封装区的数据和渲染
async function getAreaData(provinceCode, cityCode) {
    //获取安徽省下所有市的数据
    const {data: {data: areaData}} = await axios.get('/city/area', {
        params: {
            provinceCode, cityCode
        }
    })
    // console.log(areaData)

    //渲染城市选择框
    const areaStr = areaData.map(item => `<option value="${item.area}">${item.name}</option>`).join('')
    // console.log(areaStr)

    qs('#county').innerHTML = '<option value="">请选择区县</option>' + areaStr
}

async function init() {

    await getProvinceData()

    //默认选择安徽省
    qs('#province').value = 34

    await getCityData('34')

    //默认选择合肥市
    qs('#city').value = '01'

    await getAreaData('34', '01')

    //默认选择合肥市
    qs('#county').value = '02'
}

init()

//省下拉框注册 change 事件
qs('#province').addEventListener('change', async function () {
    // console.log(this.value) //省下拉框的值

    await getCityData(this.value)

    //解决bug：需要重置区县数据
    qs('#county').value = ''
})

//市下拉框注册 change 事件
qs('#city').addEventListener('change', async function () {
    console.log(this.value)

    getAreaData(qs('#province').value, this.value)

    //解决bug：需要重置区县数据
    qs('#county').value = ''
})