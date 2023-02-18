const taskContainer = document.querySelector('.task-container')

function render()
{
    const taskBlock = document.createElement('div')
    const deleteElement = document.createElement('p')
    const title = document.createElement('p')
    const controller = document.createElement('button')

    taskBlock.classList.add('task-block')
    deleteElement.classList.add('delete-icon')
    controller.classList.add('controller-button')

    deleteElement.textContent = 'X'
    title.textContent = 'Task title'
    controller.textContent = 'Start'

    taskBlock.append(deleteElement, title, controller)
    taskContainer.append(taskBlock)
}

render()