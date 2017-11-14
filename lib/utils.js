/*
* @Author: eleven
* @Date:   2017-11-08 00:11:26
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-14 23:31:10
*/

export function isEmptyObject (obj) {
	if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
		return false
	}
    return !Object.keys(obj).length
}
