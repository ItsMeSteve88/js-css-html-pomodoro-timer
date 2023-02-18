const taskContainer = document.querySelector('.task-container')
const submitButton = document.querySelector('.submit-button')


let tasks = [
    {
        name: 'Practice CSS Animations',
        priority: 0,
    },
    {
        name: 'Dev community work',
        priority: 2,
    },
    {
        name: 'Algorithm studies',
        priority: 1,
    }
]

// sort by priority

const descendingTasks = tasks.sort((taskA, taskB) => taskA.priority - taskB.priority)


function render()
{
    descendingTasks.forEach(task =>
    {
        const taskBlock = document.createElement('div')
        const deleteElement = document.createElement('p')
        const title = document.createElement('p')
        const controller = document.createElement('button')
    
        taskBlock.classList.add('task-block')
        deleteElement.classList.add('delete-icon')
        controller.classList.add('controller-button')
    
        deleteElement.textContent = 'X'
        title.textContent = task.name
        controller.textContent = 'Start'

        deleteElement.addEventListener('click', deleteTask)
    
        taskBlock.append(deleteElement, title, controller)
        taskContainer.append(taskBlock)
    })

}

render()

function deleteTask(e)
{
    const task = e.target.parentNode
    task.remove()
    // console.log(tasks) toDo: remove from array
}

function addTask()
{
    // select input element (add task)
    const inputElement = document.querySelector('input')
    // get value from input element
    const value = inputElement.value
    console.log(value)
    if (value)
    {
        taskContainer.innerHTML = ''
        tasks.push({
            name: value,
            priority: tasks.length
        })
        render()
    }
}

// add event listener to submit button to add the task
submitButton.addEventListener('click', addTask)