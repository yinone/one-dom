/*
* @Author: eleven
* @Date:   2017-11-07 10:46:23
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-13 01:20:52
*/

/** @jsx h */

import { h, createElement } from '../lib'

const content = `
	margin: 0;
	padding: 0;
	text-align: center;`

const node = <div style={ content }><p style="font-size: 18px; background-color: #ddd">hello virtual dom</p></div>

console.log(node)
const dom = createElement(node)
document.getElementById('app').appendChild(dom)
