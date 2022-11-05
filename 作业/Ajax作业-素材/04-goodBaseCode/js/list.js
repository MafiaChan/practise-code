axios.defaults.baseURL = 'http://124.223.14.236:3001/api'
const id = location.search.substring(4)
// console.log(id);
// 商品列表渲染
renderList()
renderGoods(id)

async function renderGoods(id) {
    const {data: res} = await axios.get('/goods', {
        params: {
            pageSize: 20,
            cate_id: id
        }
    })
    // console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    const {list} = res.data
    if (list.length === 0) {
        document.querySelector('.empty').style.display = 'block'
        document.querySelector('.desc').style.display = 'none'
    }
    const htmlStr = list.map(item => `
                <li data-id=${item.id}>
                <img src="${item.img}" alt="">
                <h3 data-id=${item.cate_id}>${item.title}</h3>
                <p>
                    <span>￥${item.price}</span>
                    <span class="add">+</span>
                </p>
            </li>
               `).join('')
    document.querySelector('.good-list ul').innerHTML = htmlStr
}


// 渲染分类列表
async function renderList() {
    const {data: res} = await axios.get('/goods/cate')
    if (!res.success) {
        return alert(res.msg)
    }
    const {data} = res
    const listStr = data.map(item => {
        // console.log(item.id);
        if (item.id == id) {
            return `<li data-id=${item.id} class="active"><a href="javascript:;">${item.name}</a></li>`
        } else
            return `<li data-id=${item.id}><a href="javascript:;">${item.name}</a></li>`
    }).join('')

    document.querySelector('.cate-list-fix ul').innerHTML = listStr
    await renderGoods(id)
}


// 点击分类
document.querySelector('.cate-list-fix').addEventListener('click', async function (e) {
    // console.log(1)
    if (e.target.tagName === 'A') {
        // console.log(1)
        // console.log(e.target)
        document.querySelector('.cate-list-fix .active').classList.remove('active')
        // console.log(e.target.parentNode)
        e.target.parentNode.classList.add('active')
        await renderGoods(e.target.parentNode.getAttribute('data-id'))
    }

})

// 添加购物车功能
function addGoods() {
    $('.good-list').on('click', '.add', async function () {
        const title = $(this).parent().siblings('h3').html()
        const img = $(this).parent().siblings('img').prop('src')
        const goods_id = +$(this).parents('li').attr('data-id')
        const cate_id = +$(this).parent().siblings('h3').attr('data-id')
        const price = +$(this).siblings().html().substring(1)
        const {data: res} = await axios({
            method: 'POST',
            url: '/cart/create',
            headers: {
                Authorization: localStorage.getItem('token')
            },
            dataType: 'json',
            contentType: 'application/json',
            data: {
                title,
                img,
                goods_id,
                cate_id,
                price,
                buy_num: 1,
                is_selected: 0
            },
        })
        if (!res.success) {
            return alert(res.msg)
        }
        alert('添加购物车成功')


    })
}

addGoods()