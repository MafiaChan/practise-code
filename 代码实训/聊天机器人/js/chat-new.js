$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()

    // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function () {
        // 细节：首尾空格
        const content = $('#ipt').val().trim()
        // if (content.length <= 0) {
        if (content === '') {
            // if成立，说明啥都没写
            $('#ipt').val('')
            return alert('请输入内容')
        }

        // 追加节点
        $('#talk_list').append(`
            <li class="right_word">
                <img src="img/person02.png" /> <span>${content}</span>
            </li>
        `)
        // 处理滚动条位置
        resetui()
        // 清空
        $('#ipt').val('')

        // content 实参
        getRobot(content)
    })

    // 获取聊天机器人发送回来的消息
    //  完整地址: http://ajax-api.itheima.net/api/robot
    //  请求方式： GET
    //  请求参数：spoken     要发给机器人的聊天消息
    async function getRobot(content) {
        // 形参content 用户说的话
        console.log('用户说的话: ', content)

        // 发送ajax请求，把用户说的话发送给服务器，并且把机器人说的话渲染展示到列表中
        const {data: res} = await axios.get('http://ajax-api.itheima.net/api/robot', {
            params: {
                spoken: content
            }
        })
        console.log(res)
        // 成功还是失败
        if (res.message !== 'success') return alert('获取失败')

        // 成功了
        const text = res.data.info.text
        console.log('机器人说的话: ', text)

        // 追加节点
        $('#talk_list').append(`
                     <li class="left_word">
                         <img src="img/person01.png" /> <span>${text}</span>
                     </li>
                 `)
        // 滚动条
        resetui()

        // 把机器人说的话转语音
        getVoice(text)
    }

    // 把文字转化为语音进行播放
    //  机器人说的话
    //  完整地址: http://ajax-base-api-t.itheima.net/api/synthesize
    //  请求方式： GET
    //  请求参数： text     对应文字转语音
    async function getVoice(text) {
        const {data: res} = await axios.get('http://ajax-base-api-t.itheima.net/api/synthesize', {
            params: {text}
        })
        console.log(res)
        if (res.status !== 200) return alert('获取语音失败')

        // 获取到语音地址  jQ的attr方法 操作属性
        $('#voice').attr('src', res.voiceUrl)
    }

    // 为文本框绑定 keyup 事件 来实现回车发布功能
    $('#ipt').on('keyup', function (e) {
        // if (e.key === 'Enter') {
        //     // console.log('回车了') // 发送消息，去触发按钮的点击事件
        //     $('#btnSend').click()
        // }

        // 优化if代码
        // if (e.key === 'Enter') $('#btnSend').click()

        // 还可以在优化  if都不要   && 逻辑与    ||  逻辑或 短路功能(逻辑中断)
        // 表示前面的 判断成立的时候，才会执行 && 后面的代码
        e.key === 'Enter' && $('#btnSend').click()
    })
})
