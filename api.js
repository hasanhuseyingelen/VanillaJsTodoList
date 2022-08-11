import { addTaskItemList } from './taskItem.js';

import { taskCounter, updateSelector } from './closure.js';

const tCounter = taskCounter();
const innerHtml = updateSelector('innerHTML');

export const dataFromApi = (taskItemList) => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // Adding dom new task list
        for(var i=0; i<data.length; i++) {
            taskItemList.push(data[i].id + ' - ' + data[i].title);
            addTaskItemList(data[i].id + ' - ' + data[i].title);
        }

        tCounter.increment(data.length);
        innerHtml('#taskCounterValue',  tCounter.value());

        return taskItemList;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
