import { createElement, createDynamicItem } from './element.js'
import { taskItemList } from './index.js';
import { addArray } from './array.js';
import { setElementValue,
    getElementValueByElementId,
    getElementById,
    isEmpty } from './value.js';
import { taskCounter, updateSelector } from './closure.js';

const innerHtml = updateSelector('innerHTML');
const tCounter = taskCounter();

/* Fuctions */ 
export function addNewTask(taskItemList) {
    var newTaskItem = getElementValueByElementId('newTaskItemInput'); 

    if(isEmpty(newTaskItem)) {
        alert('Please Insert New Task Name')
        return;
    }

    // Adding array
    addArray(taskItemList, newTaskItem);
    
    // Adding list html
    addTaskItemList(newTaskItem);

    // Input value should be null after add operation
    setElementValue('newTaskItemInput', null);
}

export function addTaskItemList(newTaskItem) {
    // var tCounter = taskCounter();

    var ul = getElementById('ulList');

    createDynamicItem('li', { classList: 'litaskItem', id: 'liTaskItem' + liCount, child: { createTextNode:newTaskItem }   })
    
    /* Create Li Item */
    var li = document.createElement("li");
    li.classList.add('liTaskItem');
    var liCount = document.querySelectorAll('.liTaskItem').length;
    li.id = 'liTaskItem' + liCount;
    li.appendChild(document.createTextNode(newTaskItem));
    
    ul.appendChild(li);

    /* Create li Delete Button */
    createElement('button', ['clearButton'], 'button-' + liCount, 'liTaskItem'+liCount );
    var button = document.getElementById('button-' + liCount);
    button.appendChild(document.createTextNode('Delete'));
    
    button.addEventListener('click', function(){
        console.log('Delete Button Listener: ' + 'button-' + liCount);
        deleteTask(button.id);

        tCounter.decrement();

        innerHtml('#taskCounterValue',  tCounter.value());
    }, false);
}

export function deleteTask(id) {
    console.log('id', id);
    // Clear list from dom
    // Delete Selected Task from arrayList
    
    taskItemList.splice(id.split('-')[1], 1);
    
    clearAllTask(true);

    // Adding dom new task list
    for(var i=0; i<taskItemList.length; i++) {
        addTaskItemList(taskItemList[i]);
    }
}

export function clearAllTask(isDeleteTaskButton){
    // Clear All Task in to the list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';

    if(isDeleteTaskButton) {
        return;
    }
    taskItemList.length = 0;
}