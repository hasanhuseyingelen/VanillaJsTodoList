import { htmlElemetList } from "./htmlElements.js";
import { findInArray } from "./array.js";

/**
 * 
 * @param {*} type 
 * @param {*} classList 
 * @param {*} id 
 * @param {*} parentNode 
 * @param {*} properties 
 */
export const createElement = (type, classList, id, parentNode, properties = []) => {
    var newElement = document.createElement(type);

    for (var i = 0; i < classList?.length; i++){
        newElement.classList.add(classList[i]);
    }

    // createElement('p', ['task'], 'taskCounterTitle', 'taskCounterHeader', [{ createTextNode: 'Text'}]);
    for (var i = 0; i < properties.length; i++){
        var dynamicElementProperties = document[Object.keys(properties[i])](Object.values(properties[i]));
        newElement.appendChild(dynamicElementProperties);
    }

    newElement.id = id;
    document.querySelector( '#' + parentNode).appendChild(newElement);
}


/**
 * 
 * @param {*} elName Html Element ex. 'div, li, a'
 * @param {*} obj Html Element attributes
 * @returns 
 */
export function createDynamicItem(elName, obj) {
    if(!findInArray(htmlElemetList, elName)){
        alert('Please insert correct html element');
        return;
    }
    
    var el =  document.createElement(elName);
}


