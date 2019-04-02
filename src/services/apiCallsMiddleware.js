export default (request, timeout = 10000) => {
    let headers = Object.assign({
        'Accept': 'application/json, text/javascript, */*, vnd.rim; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }, request.headers);

    let params = {
        method: request.method,
        headers
    };

    let serverTimeOut = new Promise((resolve, reject) => {
        setTimeout(reject, timeout, {error: 'ServerError', message: 'Service timeout error'})
    });

    let serviceCall = fetch(`${request.url}`, params)
        .then(async response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(err => {
                    throw err
                })
            }
        });

    return Promise.race([serverTimeOut, serviceCall])
}