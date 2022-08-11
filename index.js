/* Import JS Files */
import { dataFromApi } from "./api.js";
import { createElement } from "./element.js";
import elementConstant from './constants/elementConstant.json' assert { type: "json" };
import { 
    addNewTask,
    clearAllTask
} from "./taskItem.js";
// import { elm } from './array.js';
import { updateSelector,
    taskCounter,
    fontSize } from './closure.js';

/* Variables */
export const taskItemList = [];
sessionStorage.setItem('taskCount', 0);
var tCounter = taskCounter();

// var { div, button, input, ul } = elm;
var el = elementConstant;

const innerHtml = updateSelector('innerHTML');
const placeholder = updateSelector('placeholder');



/* Create New Task Area */
var root = document.querySelector('#root');

// createElement(el.div, ['taskTotalCount'],'taskCounter', 'root');
// innerHtml('#taskCounterHeader', 'Task Count');


/* New Task Area Element Creation */ 
createElement(el.div, ['taskBox'],'taskBox', 'root');

createElement(el.div, ['task'], 'task', 'taskBox');

createElement(el.div, ['header'], 'header', 'task');
innerHtml('#header', 'New Task Area');


createElement(el.div, ['taskTotalCount'], 'taskCounterHeader', 'taskBox');
createElement('p',null, 'taskCounterTitle', 'taskCounterHeader', [{ createTextNode: 'Total Task Count: '}]);
createElement('p', null, 'taskCounterValue', 'taskCounterHeader', [{ createTextNode: tCounter.value()}]);


/// Task Counter Font Size Set from closure 
const size20 = fontSize(20);
size20('#taskCounterTitle');

const size24 = fontSize(24);
size24('#taskCounterValue');
    
createElement(el.div, ['margin-10'], 'newTaskItem', 'task');

createElement(el.input, ['newTaskItemInput'], 'newTaskItemInput', 'newTaskItem');
placeholder('#newTaskItemInput', 'Please Insert New Task Item');


createElement(el.button, ['button'], 'addNewTaskButton', 'newTaskItem');
innerHtml('#addNewTaskButton', '+');
document.querySelector('#addNewTaskButton').addEventListener("click", () =>  { 
    addNewTask(taskItemList);
    tCounter.increment();
    innerHtml('#taskCounterValue',  tCounter.value());
});

createElement(el.button, ['addNewApiButton'], 'addNewApiButton', 'newTaskItem');
innerHtml('#addNewApiButton', 'Data From Api');
document.querySelector('#addNewApiButton').addEventListener("click", function() {
    dataFromApi(taskItemList);
   
});

/* Divider */
createElement(el.div, ['divider'],'divider', 'taskBox');

/* Task List Area Element Creation */
createElement(el.div, ['task'],'taskList', 'taskBox');
createElement(el.div, ['header'], 'taskListHeader', 'taskList');
innerHtml('#taskListHeader', 'Task List');

createElement(el.button, ['clearButton'], 'clearAllButton', 'taskListHeader');
innerHtml('#clearAllButton', 'Clear All Button');

document.querySelector('#clearAllButton').addEventListener("click", function() {
        clearAllTask(false, taskItemList);
        tCounter.reset();
        innerHtml('#taskCounterValue',  tCounter.value());
    });

createElement(el.div, ['taskItemList'], 'taskItem', 'taskList');
createElement(el.ul, ['ulList'], 'ulList', 'taskItem');


// TODO: Should be add pagination feature










