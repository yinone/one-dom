/*
* @Author: eleven
* @Date:   2017-11-05 16:28:11
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-13 01:21:23
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
            $el.setAttribute(prop, node.props[prop])
        })
    }
    if (node.children.length) {
        node.children.forEach((child) => {
            return $el.appendChild(createElement(child))
        })
    }
    return $el
}
