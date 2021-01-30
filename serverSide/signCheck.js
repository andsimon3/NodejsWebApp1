module.exports =  function singCheck(param) {

const qs = require('querystring');
const crypto = require('crypto');
const secretKey = 'd3Im5ezfe7dhQPuroeM8';
    const urlParams = qs.parse(param);
    const ordered = {};
    Object.keys(urlParams).sort().forEach((key) => {
        if (key.slice(0, 3) === 'vk_') {
            ordered[key] = urlParams[key];
        }
    });
    const stringParams = qs.stringify(ordered);
    const paramsHash = crypto
        .createHmac('sha256', secretKey)
        .update(stringParams)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=$/, '');
    
    if (paramsHash === urlParams.sign) {
        return urlParams.vk_user_id;
    } else { return 0; }
}