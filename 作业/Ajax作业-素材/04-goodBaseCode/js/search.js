axios.defaults.baseURL = 'http://124.223.14.236:3001/api'

const arr = localStorage.getItem('title') ? JSON.parse(localStorage.getItem('title')) : []

// console.log(arr);
function renderlist(title) {
    $.ajax({
        method: 'GET',
        url: 'http://124.223.14.236:3001/api/goods',
        data: {

            title
        },
        success(res) {
            // console.log(res);
            if (!res.success) {
                return alert(res.msg)
            }
            const {list} = res.data
            if (list.length === 0) {
                $('.empty').show()
                $('.desc').hide()
            }

            const str = list.map(item => `
                <li data-id=${item.id}>
                <img src="${item.img}" alt="">
                <h3 data-id=${item.cate_id}>${item.title}</h3>
                <p>
                    <span>￥${item.price}</span>
                    <span class="add">+</span>
                </p>
            </li>
               `).join('')
            $('.good-list ul').html(str)

        }
    })
}

$('.fix-title input').keyup(function (e) {
    if (e.key === 'Enter') {
        const title = $(this).val()
        arr.unshift(title)
        localStorage.setItem('title', JSON.stringify(arr))
        renderlist(title)
        // history()
        $('.text').click()
    }
})

// 历史记录部分
// console.log(arr);
// function history() {
//     arr = JSON.parse(localStorage.getItem('title'))
//     if (arr === []) {
//         return $('.history-list ul').html('')
//
//     }
// const str = arr.map(item => `
// <li>${item}</li>
// `).join('')
// $('.history-list ul').html(str)
// }

// history()

// 点击删除
$('.history-list .del').click(function () {
    localStorage.setItem('title', '[]')
    history()
})

// 点击确定
$('.text').click(function () {
    const title = $('.fix-title input').val()
    console.log(arr)
    arr.unshift(title)
    localStorage.setItem('title', JSON.stringify(arr))
    renderlist(title)
    // history()
})
