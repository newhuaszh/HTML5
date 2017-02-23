/**
 * Created by sn01396 on 2017/2/23 0023.
 */
const STORAGE_KEY = 'todos-vuejs'

export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },

    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }

}