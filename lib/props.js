/*
* @Author: eleven
* @Date:   2017-11-17 23:44:25
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-18 00:34:00
*/

import { isEmptyObject, isElementNode } from './utils'

function updateProp($target, name, newValue, oldValue, newProps) {
	if (!newValue) {
		removeProp($target, name)
	}
	if (newValue) {
		if (diffProp(newValue, oldValue)) {
			return $target.setAttribute(name, newValue)
		}
	}
	_setProps($target, newProps)
}

function diffProp(newValue, oldValue) {
	return newValue !== oldValue
}

function _setProps($target, props) {
	if (!isElementNode($target)) {
		return false
	}
	if (!isEmptyObject(props)) {
		Object.keys(props).forEach(prop => {
			setProp($target, prop, props[prop])
		})
	}
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

export {
	updateProp,
	setProp,
	_setProps
}
