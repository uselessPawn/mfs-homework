module.exports = function ajaxGet(url) {
    const promise = new Promise((resolve, rejecte) => {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    rejecte(xhr.statusText)
                }
            }
        }
        xhr.open('get', url);
        xhr.send();
    })
    return promise;
}