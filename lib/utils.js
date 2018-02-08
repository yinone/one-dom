/*
* @Author: eleven
* @Date:   2017-11-08 00:11:26
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-18 20:27:42
*/

export function isEmptyObject (obj) {
	if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
		return false
	}
    return !Object.keys(obj).length
}

export function isElementNode($el) {
	return $el && $el.nodeType === 1
}
