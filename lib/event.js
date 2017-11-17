/*
* @Author: eleven
* @Date:   2017-11-17 23:50:24
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-18 02:05:44
*/

import { isEmptyObject, isElementNode } from './utils'

const listeners = []
let $key = 0

function addListeners($target, handlers) {
	$key++
	Object.keys(handlers).forEach(type => {
		listeners.push({
			type: handlers[type],
			$key
		})
		addEvent($target, type, handlers[type])
	})
	return listeners
}

function removeListeners($target, types) {

}

function removeEvent($target, type, handler) {
	isEventType(...arguments) && removeEventListener.call($target, [...arguments])
}

function addEvent($target, type, handler) {
	isEventHandler(...arguments) && addEventListener.call($target, [...arguments])
}

function addCustomEvent() {

}

function removeCustonEvent() {

}

function isEventHandler($target, type, handler) {
	return handler && isElementNode($target) && isEventType(type)
}
function isEventType(type) {
	return /^on[A-Z][a-z]*/.test(type)
}

export {
	addEvents
}
