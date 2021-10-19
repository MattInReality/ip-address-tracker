function validate(value = '', pattern) {
    if (typeof value !== "string") {
        throw new Error('validation target must be type: string')
    }
    const regex = new RegExp(pattern)
    return regex.test(value)
}

function validateIPAddress(value) {
    // const pattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g
    const pattern = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}$/
    return validate(value, pattern)
}

function validateDomain(value) {
    // const pattern = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/g
    const pattern = /^(?![\d.]+)((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9._-]{1,61}|[a-z0-9-]{1,30})$/g
    return validate(value, pattern)
}

export {
    validate,
    validateIPAddress,
    validateDomain
}
