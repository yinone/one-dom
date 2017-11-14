/*
* @Author: eleven
* @Date:   2017-11-05 16:28:11
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-14 23:46:32
*/

import { isEmptyObject } from './utils'

export function h(type, props, ...children) {
    return {
        type,
        props,
        children
    }
}

export function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node)
    }
    let $el = document.createElement(node.type)
    if (!isEmptyObject(node.props)) {
        Object.keys(node.props).forEach(prop => {
			setProp($el, prop, node.props[prop])
		})
    }
    node.children.map(createElement).forEach($el.appendChild.bind($el))
    return $el
}

function setProp($target, name, value) {
	if (name === 'className') {
		$target.setAttribute('class', value)
	}
	if (typeof value === 'boolean') {
		setBooleanProp($target, name, value)
	}
	$target.setAttribute(name, value)
}

function setBooleanProp($target, name, value) {
	$target.setAttribute(name, value)
	$target[name] = value
}
