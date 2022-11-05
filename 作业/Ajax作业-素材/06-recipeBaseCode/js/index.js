axios.defaults.baseURL = 'http://124.223.14.236:3001';

async function getList() {
    const {data: {data: res}} = await axios({
        url: '/api/recipe',
        params: {
            pageSize: 30,
        },
    })
    console.log(res)

    document.querySelector('.list-box').innerHTML = res.list
        .map(item => {
            let {img, name, id} = item;
            return `
          <li>
            <a href="./info.html?id=${id}">
              <img src='http://124.223.14.236:3001/public/${img}' alt="" />
              <h3 title="${name}">${name}</h3>
            </a>
          </li>
        `
        }).join('')
}

getList()

