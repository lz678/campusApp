//存本地内存
export const setStore = (name, content, type = 'localStorage') => {
    if (!name) return
    if (typeof content !== 'string') {
        // content = JSON.stringify(content)
    }
    window[type].setItem(name, content)
}
//获取本地内存
export const getStore = (name, type = 'localStorage') => {
    if (!name) return
    var content = window[type].getItem(name)
    if (content) {
        // content = JSON.stringify(content)
        // content = JSON.parse(content)
        // content=JSON.parse(content)
        // content =JSON.parse(content)
    }
    return content || ''
}
//删除本地内存
export const removeStore = (name, type = 'localStorage') => {
    if (!name) return
    window[type].removeItem(name)
}