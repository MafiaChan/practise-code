axios.defaults.baseURL = 'http://124.223.14.236:3001/api'
// 渲染留言列表
render()

async function render(order = 'id') {
    const {data: res} = await axios.get('/notes', {
        params: {
            data: {
                pageSize: 20,
                order
            },
        }
    })

    console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    const {list} = res.data
    const str = list.map(item => {
        if (item.vip) {
            return `
             <li class="comm-item" data-id="${item.id}">
        <div class="avatar" style="background-image: url('https://static.youku.com/lvip/img/avatar/310/6.png');"></div>
        <div class="info">
          <p class="name vip">
            ${item.username}
            <img alt="" src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png" />
          </p>
          <p class="time">
            <span>${getTime(+item.time)}</span>
            <span class="iconfont icon-collect"></span>
            <span class="iconfont icon-collect-sel"></span>
            <span class="del">删除</span>
          </p>
          <p>
            ${item.content}
          </p>
        </div>
      </li>
            `
        } else {
            return `
             <li class="comm-item" data-id="${item.id}">
        <div class="avatar"></div>
        <div class="info">
          <p class="name">
            ${item.username}
          </p>
          <p class="time">
            <span>${moment(+item.time).format("YYYY-MM-DD")}</span>
            <span class="iconfont icon-collect-sel"></span>
            <span class="del">删除</span>
          </p>
          <p>
           ${item.content}
          </p>
        </div>
      </li>
            `
        }
    }).join('')
    $('.comm-list').html(str)
    // console.log(list.length);
    $('.comm-head sub').html(`(${list.length})`)


}

let order
// 点击选择默认或时间
$('.comm-head span').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    if ($('.comm-head span').html === '时间') {
        order = 'time'
        render(order)
    } else {
        order = 'id'
        render(order)
    }
})

// 添加评论
$('.comm-input textarea').keyup(function (e) {
        $(this).val()
        $('.foot .word').html(`${$(this).val().length}/100`)
        if (e.key === 'Enter') {
            $('.foot .btn').click()
        }
    }
)

// 点击删除
$('.comm-list').on('click', 'li', async function () {
    const id = $(this).attr('data-id')
    const {data: res} = await axios({
        method: 'DELETE',
        url: `/notes/${id}`,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

    if (!res.success) {
        return alert(res.msg)
    }
    await render()


})

// 点击发表评论
$('.foot .btn').click(async function () {
    const val = $('.comm-input textarea').val().trim()
    if (val) {
        const {data: res} = await axios({
            method: 'POST',
            url: '/notes',
            headers: {
                Authorization: localStorage.getItem('token')
            },
            data: {
                content: val
            }
        })

        if (!res.success) {
            return alert(res.msg)
        }
        await render()
        $('.comm-input textarea').val('')
        $('.foot .word').html('0/100')


    }
})
