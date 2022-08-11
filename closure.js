export function updateSelector(property) {
    let prop = property;

    function setSelector(selector, value) {
        document.querySelector(selector)[prop] = value;
    }

    return setSelector;
}

export function getQuerySelector() {
    
    function getSelector(selector) {
        document.querySelector(selector);
    }

    return getSelector;
}


export function taskCounter() {
    
    function changeBy(val) {
        const newCounter = +sessionStorage.getItem('taskCount') + val;
        sessionStorage.setItem('taskCount', newCounter);
    }
  
    return {
      increment(val = 1) {
        changeBy(val);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return sessionStorage.getItem('taskCount');
      },

      reset() {
        sessionStorage.setItem('taskCount', 0);
      }
    };
}

// export function taskItemListStorage(taskItems) {

//     function lastTaskItemList(list) {
//         sessionStorage.setItem('taskItemList', list);
//     }

//     return {

//     }
// }


export function fontSize(size) {
    return function (element) {
        document.querySelector(element).style.fontSize = `${size}px`;
    };
}

// TODO: Set element style attributes dynamically
export function setElementStyle(elem) {
    return function () {
        
    }
}
  
