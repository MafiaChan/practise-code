axios.defaults.baseURL = 'http://124.223.14.236:3001/api'
// 渲染心愿列表
render()

async function render() {
    const {data: res} = await axios.get('/wish', {
        params: {
            pageSize: 20
        }
    })

    if (!res.success) {
        return alert(res.msg)
    }
    const {list} = res.data
    if (list.length === 0) {
        $('.no-list').show()
    }
    const str = list.map(item => `
      <div class="item" style="background:${item.color}" data-id="${item.id}">
				<div class="tit">
					<span>From：<b>${item.username}</b></span>
					<span class="iconfont icon-shanchu del"></span>
				</div>
				<div class="content">
					${item.content}
					<br />
					(${getTime(item.time)})
				</div>
			</div>
      `).join("")
    $('.list-box').html(str)


}


// 处理时间
function getTime(time) {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = change(date.getMonth() + 1)
    // console.log(month);
    const day = change(date.getDate())
    const hour = change(date.getHours())
    const min = change(date.getMinutes())
    const sec = change(date.getSeconds())
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
}

// 字符拼接
function change(x) {
    return x >= 10 ? x : '0' + x
}

// 点击添加心愿
$('.add').click(function () {
    $('.alert-box').show()
})

// 添加心愿文本框字数处理
$('.row-box textarea').keyup(function () {
    $(this).siblings().html(`${$(this).val().length}/80`)
})
// 选择贴纸颜色
$('.col li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// 点击确定
$('.ok').click(async function () {
    const content = $(this).parent().siblings('.row-box').find('textarea').val().trim()
    const color = $(this).parent().siblings('.row').find('.active').css('background-color')
    console.log(color);
    console.log(content);
    if (content === '') {
        return alert('请输入内容')
    }
    const {data: res} = await axios({
        method: 'POST',
        url: '/wish',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        data: {
            content,
            color
        }
    })

    if (!res.success) {
        return alert(res.msg)
    }
    alert('添加成功')
    $('.alert-box').hide()
    await render()

})
// 点击取消
$('.cancel').click(function () {
    $('.alert-box').hide()
})
// 点击删除
$('.list-box').on('click', '.del', async function () {
    const id = $(this).parents('.item').attr('data-id')
    const {data: res} = await axios({
        method: 'DELETE',
        url: `/wish/${id}`,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    if (!res.success) {
        return alert(res.msg)
    }
    await render()

})


