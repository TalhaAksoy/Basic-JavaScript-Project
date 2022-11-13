document.addEventListener('DOMContentLoaded', function(){
    let taskInput = document.querySelector('input.taskInput');
    let taskBtn = document.querySelector('button.taskBtn');
    let taskDiv = document.querySelector('div.taskDiv');
    taskBtn.addEventListener('click', function(){
        if (taskInput.value != '')
        {
            const node = document.createElement('<div class="w-full border-2 text-2xl flex flex-wrap flex-row items-center pl-4 gap-x-8">'+
            '<input type="checkbox" class="w-5 h-5 rounded-lg">'+
            '<span class="taskText">Task 1</span> '+
            '</div>');
            console.log(node);
        }
    });
});