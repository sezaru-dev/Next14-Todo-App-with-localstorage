import TaskButtonGroup from './TaskButtonGroup'
import { useTodoStore } from '@/store/todo-store'

const TaskInfo = () => {
  const filteredTasks = useTodoStore((state) => state.filteredTasks)
  const clearCompletedTask = useTodoStore((state) => state.clearCompletedTask)
  const activeTask = filteredTasks?.filter((task) => task.isCompleted === false).length

  return (
    <div className='py-4 px-5 lg:py-5 lg:px-6 bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue text-lmode-lightGrayishBlue dark:text-dmode-grayishBlue1 flex items-center justify-between gap-6 group colorModeTransition'>
      {/* display filtered task count */}
      <p className='text-xs lg:text-sm text-lmode-grayishBlue1 dark:text-dmode-grayishBlue1 colorModeTransition'>{activeTask} items left</p>
      
      {/* task filter buttongroup */}
      <TaskButtonGroup style="hidden lg:flex gap-4" />
      
      {/* clear all task */}
      <a onClick={clearCompletedTask} className='text-xs lg:text-sm text-lmode-grayishBlue1 dark:text-dmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer transition-colors duration-150 ease-in-out'>Clear Completed</a>
    </div>
  )
}

export default TaskInfo