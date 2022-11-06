import {addFn} from "./add/add"
import {getArrSum} from './tool/tool'

addFn(1, 1)
console.log(getArrSum([1, 2, 3]));

import $ from 'jquery'

$('ul>li:even').css('color', 'red')
$('ul>li:odd').css('color', 'lime')


import "./css/index.css"

import './less/index.less'

import imgUrl from './assets/1.gif'

const theImg = document.querySelector("img")
theImg.src = imgUrl

import './assets/fonts/iconfont.css'

const fn = (a, b) => {
    console.log(a + "你好babel" + b);
}
console.log(fn)