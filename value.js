/** 
 * @param el Element Id
 * @param value Element value
 */
export function setElementValue(el, value) {
    document.getElementById(el).value = value;
}

/** 
 * @param el Element Id
 * return Element Value According to Id 
 */
export function getElementValueByElementId(el) {
    return document.getElementById(el).value;
}

/** 
 * @param el Element Id
 * return Element According to Element Id 
 */
 export function getElementById(el) {
    return document.getElementById(el);
}

/**
 * 
 * @param {*} value 
 * @returns boolean
 */
export function isNull(value) {
    return value === null ? true : false;
}

/**
 * 
 * @param {*} obj 
 * @returns boolean
 */
export function isEmpty(obj) {
    for(var prop in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }  

    // TODO: isEmpty control should be according to type
    if(typeof obj === 'string'){
        return JSON.stringify(obj) === JSON.stringify('');
    }else {
        return JSON.stringify(obj) === JSON.stringify({});
    }
}