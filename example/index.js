/*
* @Author: eleven
* @Date:   2017-11-07 10:46:23
* @Last Modified by:   eleven
* @Last Modified time: 2018-02-05 20:03:28
*/

/** @jsx h */

import { h, createElement } from '../lib'
require('./style.styl')

const content = `
	margin: 0;
	padding: 0;
	text-align: center;`

const node = (
	<div style={ content } className="content">
		<input type="text" disabled={ true } style="border: 1px solid #ddd" />
		<p style="font-size: 18px; background-color: #ddd">hello virtual dom</p>
	</div>
)

function handler(evt) {
	console.log(evt)
}

console.log(node)
const dom = createElement(node)
document.getElementById('app').appendChild(dom)
