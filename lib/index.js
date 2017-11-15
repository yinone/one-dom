/*
* @Author: eleven
* @Date:   2017-11-05 16:28:11
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-15 23:44:26
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

export function updateElement() {

}

function updateProp() {

}

function setProp($target, name, value) {
	if (name === 'className') {
		return $target.setAttribute('class', value)
	}
	if (typeof value === 'boolean') {
		return setBooleanProp($target, name, value)
	}
	$target.setAttribute(name, value)
}

function setBooleanProp($target, name, value) {
	if (value) {
		$target.setAttribute(name, value)
		$target[name] = value
	} else {
		$target[name] = value
	}
}

function removeProp($target, name) {
	if (typeof $target[name] === 'boolean') {
		$target[name] = false
	} else {
		$target.removeAttribute(name === 'className' ? 'class' : name)
	}
}
