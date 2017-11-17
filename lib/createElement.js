/*
* @Author: eleven
* @Date:   2017-11-17 23:48:01
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-17 23:48:36
*/

import { isEmptyObject } from './utils'
import { _setProps } from './props'

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
    _setProps($el, node.props)
    node.children.map(createElement).forEach($el.appendChild.bind($el))
    return $el
}

export function updateElement() {

}
