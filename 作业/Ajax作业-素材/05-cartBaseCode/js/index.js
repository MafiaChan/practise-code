axios.defaults.baseURL = 'http://124.223.14.236:3001/api'

// 获取购物车信息
function render() {
    axios.get('/cart', {headers: {Authorization: localStorage.getItem('token')}}).then(res => {
        const {data: {data}} = res
        // console.log(data)
        const str = data.map((item, index) => {
                if (item.is_selected) {
                    return `
            <tr align="center" data-id="${item.id}" data-goods="${item.goods_id}" data-cate="${item.cate_id}">
        <td>
          <input class="check" type="checkbox" checked>
        </td>
        <td>${item.id}</td>
        <td class="title1">${item.title}</td>
        <td class="img">
          <img src="${item.img}" style="width:70px;height:70px;" alt="">
        </td>
        <td class="price">${item.price}</td>
        <td class="num">
          <span class="reduce">-</span>
          <input value="${item.buy_num}" type="text">
          <span class="add">+</span>
        </td>
        <td class="account">${item.price * item.buy_num}</td>
        <td>
          <button class="del">删除</button>
        </td>
      </tr>
            `
                } else
                    // console.log(item)
                    return `
          <tr align="center" data-id="${item.id}" data-goods="${item.goods_id}" data-cate="${item.cate_id}">
        <td>
          <input class="check" type="checkbox">
        </td>
        <td>${item.id}</td>
        <td class="title1">${item.title}</td>
        <td class="img">
          <img src="${item.img}" style="width:70px;height:70px;" alt="">
        </td>
        <td class="price">${item.price}</td>
        <td class="num">
          <span class="reduce">-</span>
          <input value="${item.buy_num}" type="text">
          <span class="add">+</span>
        </td>
        <td class="account">${item.price * item.buy_num}</td>
        <td>
          <button class="del">删除</button>
        </td>
      </tr>
        `
            }
        ).join('')
        $('tbody').html(str)


    })
}

render()
// 删除
$('body').on('click', '.del', function (e) {
    const id = e.target.dataset.id
    axios.delete(`/cart/delete/83`, {headers: {Authorization: localStorage.getItem('token')}}).then(res => {
        console.log(res);
        render()
    })
})
//  全选按钮控制
$('.allcheck').change(function () {
    $('tbody .check').prop('checked', $(this).prop('checked'))
    check()
})

// 反选按钮控制
$('tbody').on('change', '.check', function () {
    // console.log(1,$(this));
    if ($('tbody .check:checked').length === $('tbody .check').length) {
        $('.allcheck').prop('checked', true)
        check()

    } else {
        $('.allcheck').prop('checked', false)
        check()
    }
    changeCar($(this))
})

// 点击+更改价格小计
$('tbody').on('click', '.add', function () {
    let num = +$(this).siblings('input').val()
    const price = $(this).parent().siblings('.price').html()
    num++
    $(this).siblings('input').val(num)
    $(this).parent().siblings('.account').html(num * price)
    check()
    changeCar($(this))

})
// 点击-更改价格小计
$('tbody').on('click', '.reduce', function () {
    let num = +$(this).siblings('input').val()
    const price = $(this).parent().siblings('.price').html()

    num--
    if (num < 1) {
        num = 1
    }
    $(this).siblings('input').val(num)
    $(this).parent().siblings('.account').html(num * price)
    check()
    changeCar($(this))

})

// 对选择的商品进项数量和总结的遍历
check()

function check() {
    let list = $('tbody .check:checked')
    list = Array.from(list)
    console.log(list);
    let money = 0
    let sum = 0
    list.map(item => {
        let price = +$(item).parent().siblings('.account').html()
        let num = +$(item).parent().siblings('.num').find('input').val()
        money += price
        sum += num
    })
    $('.totalNum i').html(sum)
    $('.totalPrice i').html(money)
}


// 删除商品
$('tbody').on('click', '.del', async function () {
    const id = $(this).parents('tr').attr('data-id')
    console.log(id)
    const {data: res} = await axios({
        method: 'DELETE',
        url: `/cart/delete/${id}`,
        headers: {
            Authorization: localStorage.getItem('token')
        },
    })
    // console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    alert('删除成功')
    render()

})

// 修改购物车

function changeCar(str) {
    const tr = str.parents('tr')
    // console.log(tr);
    const id = +tr.attr('data-id')

    const goods_id = +tr.attr('data-goods')
    const cate_id = +tr.attr('data-cate')
    const title = tr.find('.title1').html()
    const img = tr.find('.img img').prop('src')
    const buy_num = +tr.find('.num input').val()
    const price = +tr.find('.price').html()
    const is_selected = tr.find('.check').prop('checked') ? 1 : 0
    // console.log(id);
    // console.log(goods_id);
    // console.log(cate_id);
    // console.log(title);
    // console.log(img);
    // console.log(buy_num);
    // console.log(price);
    // console.log(is_selected);
    $.ajax({
        method: 'PUT',
        url: `http://124.223.14.236:3001/api/cart/update/${id}`,
        headers: {
            Authorization: localStorage.getItem('token')
        },
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
            title,
            img,
            goods_id,
            cate_id,
            price,
            buy_num,
            is_selected
        }),
        success(res) {
            // console.log(res);
            if (!res.success) {
                return alert(res.msg)
            }
            render()
        }
    })

}