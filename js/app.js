const taskContainer = document.querySelector('.task-container')
const submitButton = document.querySelector('.submit-button')
const timeLeftDisplay = document.querySelector('#time-left')
const sliderFill = document.querySelector('.fill')

const startCount = 0
let timeLeft = startCount
let timerId


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

function handleClick(button)
{
    countDown(button)
}

function countDown()
{
  timerId = setInterval(() =>
    {
        timeLeft-- 
      timeLeftDisplay.textContent = timeLeft
      sliderFill.style.width = (timeLeft / startCount) * 100 + '%'
      if (timeLeft <= 0)
      {
        clearInterval(timerId)
        // start next task
      }
    }, 1000)
}

countDown()

function render()
{
    descendingTasks.forEach((task, index) =>
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

        controller.id = index

        deleteElement.addEventListener('click', deleteTask)
        controller.addEventListener('click', handleClick(controller))
    
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
        inputElement.value = ''
        tasks.push({
            name: value,
            priority: tasks.length
        })
        render()
    }
}

// add event listener to submit button to add the task
submitButton.addEventListener('click', addTask)