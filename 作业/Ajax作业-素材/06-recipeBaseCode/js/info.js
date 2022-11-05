const id = location.search.substring(4);
// console.log(location.search)
// console.log(id)
axios.defaults.baseURL = 'http://124.223.14.236:3001';

//*获取菜单详情
async function info() {
    const {data: res} = await axios({
        method: 'GET',
        url: '/api/recipe/' + id,
    })
    console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    const {data} = res
    document.querySelector('.container').innerHTML = `
    <div class="left">
     <img src="http://124.223.14.236:3001/public/${data.img}" alt="" />
    </div>
    <div class="right">
      <h3>${data.name}</h3>
      <p>
        ${data.description}
      </p>
      <h5>下面列表是菜谱中美味的菜品哦！</h5>
    </div>
      `


}

info()
food()

//*渲染美食列表
async function food() {
    const res = await axios({
        url: '/api/recipeInfo',
        params: {
            recipe_id: id,
        },
    })
    const list = res.data.data;
    if (list.length) {
        const htmlStr = list
            .map((item) => {
                const {img, title, id} = item;
                return `
        <li>
          <a href="detail.html?id=${id}">
            <img src="http://124.223.14.236:3001/public/${img}" alt="" />
            <h3>${title}</h3>
          </a>
        </li>
      `
            })
            .join('')
        // console.log(htmlStr)
        document.querySelector('.list-box').innerHTML = htmlStr
    } else {
        document.body.innerHTML += '<p class="noinfo">没有美食哦...</p>';
    }

}


