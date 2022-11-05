const id = location.search.substring(4)
console.log(id);

// 渲染美食详情
async function foodInfo() {
    const {data: res} = await axios.get(`http://124.223.14.236:3001/api/recipeInfo/${id}`)
    // console.log(res);
    if (!res.success) {
        return alert(res.msg)
    }
    const message = `<li>
                        <span class="category_s1">
                            <a title="javascript:;" href="recipe-type-do-cuisine-view-5.html" target="_blank">暂无信息</a>
                        </span>

                    </li>
                    `
    const {data} = res
    const fu_str = JSON.parse(data.raw_fu_list).length !== 0 ? JSON.parse(data.raw_fu_list).map(item => `<li>
                            <span class="category_s1">
                                <a href="/YuanLiao/YouPoLaZi/" title="${item.name}的做法" target="_blank"><b>${item.name}</b></a>
                            </span>
                            <span class="category_s2">${item.num}</span>
                        </li>`).join('') : message
    const raw_str = JSON.parse(data.raw_list).length !== 0 ? JSON.parse(data.raw_list).map(item => `<li>
                            <span class="category_s1">
                                <a href="/YuanLiao/YouPoLaZi/" title="${item.name}的做法" target="_blank"><b>${item.name}</b></a>
                            </span>
                            <span class="category_s2">${item.num}</span>
                        </li>`).join('') : message
    // console.log(JSON.parse(data.raw_tl_list));
    const tl_str = JSON.parse(data.raw_tl_list).length !== 0 ? JSON.parse(data.raw_tl_list).map(item => `<li>
                            <li>
                            <span class="category_s1">
                                <b>${item.name}</b>
                            </span>
                            <span class="category_s2">${item.num}</span>
                        </li>`).join('') : message
    const type = JSON.parse(data.raw_type).length !== 0 ? JSON.parse(data.raw_type).map(item => `<li>
                            <li>
                        <span class="category_s1">
                            <a title="${item.name}" href="recipe-type-do-cuisine-view-5.html" target="_blank">${item.name}</a>
                        </span>
                        <span class="category_s2">${item.num}</span>
                    </li>`).join('') : message
    const text = `
                    <div class="title-box">
                        <h3>${data.title}</h3>
                        <p>${data.author}</p>
                    </div>
                    <img class="show-img" src="http://124.223.14.236:3001/public/${data.img}" alt="" />
                    <blockquote>
                    <span
                        class="txt_tart"></span>${data.description}<span
                        class="txt_end">
                    </blockquote>
                    <div class="info-box">
                        <div class="mo mt20">
                            <h3>食材明细</h3>
                        </div>
                        <!-- 主料 -->
                        <fieldset class="particulars">
                            <legend>主料</legend>
                            <div class="recipeCategory_sub_R clear">
                                <ul>
                                    ${raw_str}
                                </ul>
                            </div>
                        </fieldset>
                        <!-- 辅料 -->
                        <fieldset class="particulars">
                            <legend>辅料</legend>
                            <div class="recipeCategory_sub_R clear">
                                <ul>
                                ${fu_str}
                                </ul>
                            </div>
                        </fieldset>
                        <!-- 调料 -->
                        <fieldset class="particulars">
                            <legend>调料</legend>
                            <div class="recipeCategory_sub_R clear">
                                <ul>
                                ${tl_str}
                                </ul>
                            </div>
                        </fieldset>

                        <!-- 口味 -->
                        <div class="recipeCategory_sub_R  ">
                            <ul>
                            ${type}
                            </ul>
                        </div>

                        <div class="mo mt20">
                            <h3>${data.title}的做法步骤</h3>
                        </div>
                        <div class="recipeStep">
                            <ul>
                            ${data.context}
                            </ul>
                        </div>
                    </div> 
                `
    document.querySelector('.container').innerHTML = text


}

foodInfo()

