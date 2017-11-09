/*
* @Author: eleven
* @Date:   2017-11-05 16:28:11
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-09 23:28:57
*/

import { isEmptyObject } from './utils'

function h(type, props, ...children) {
    return {
        type,
        props,
        children
    }
}

function createElement(node) {
    if (typeof node.type === 'string') {
        return document.createTextNode(node.type)
    }
    let $parent = document.createElement(node.type)
    if (!isEmptyObject(node.props)) {
        Object.keys(node.props).forEach(prop => {
            $parent.setAttribute(prop, node.props[prop])
        })
    }
    if (node.children.length) {
        node.children.forEach((child) => {
            return $parent.appendChild(createElement(child))
        })
    }
    return $parent
}

export default {
    h,
    createElement
}