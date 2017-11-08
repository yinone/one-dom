/*
* @Author: eleven
* @Date:   2017-11-05 16:28:11
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-08 00:19:33
*/

import isEmptryObjec from './utils'

function h(type, props, ...children) {
	return {
		type,
		props,
		children
	}
}

function createElement(node) {
	if(typeof node.type === 'string') {
		return document.createTextNode(node.type)
	}
	let $parent = document.createElement(node.type);
	if(!isEmptryObjec(props)) {
		Object.keys(props).forEach( prop => {
			$parent.setAttribute(prop, props[prop])
		})
	}
	if(node.children.length){
		node.children.forEach( (child) => {
			return $parent.appendChild(createElement(child))
		})
	}
	return $parent
}

export default {
	h,
	createElement,
}