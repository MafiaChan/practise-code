//*渲染分类
async function render() {
    const {data: res} = await axios.get('http://124.223.14.236:3001/api/goods/cate')

    // console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    const {data} = res
    const htmlStr = data.map(item => `<li><a href='./list.html?id=${item.id}'>${item.name}</a></li>`).join('')
    document.querySelector('.cate-list').innerHTML = htmlStr
}

render()