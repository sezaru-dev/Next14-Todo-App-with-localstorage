import React from 'react'
import TaskButtonGroup from './TaskButtonGroup'
import { TaskType } from '@/app/page'

type TaskInfoProps = {
  tasks: TaskType[] | null
  setTasks: (setTask:TaskType[]) => void
  onFilter: (filterText:string) => void
  filter: string
  clearCompletedTask: () => void
}

const TaskInfo = ({tasks, setTasks, onFilter, filter, clearCompletedTask}:TaskInfoProps) => {
  const activeTask = tasks?.filter(task => task.isCompleted === false).length

  return (
    <div className='py-4 px-5 lg:py-5 lg:px-6 bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue text-lmode-lightGrayishBlue dark:text-dmode-grayishBlue1 flex items-center justify-between gap-6 group colorModeTransition'>
      <p className='text-xs lg:text-sm text-lmode-grayishBlue1 dark:text-dmode-grayishBlue1 colorModeTransition'>{activeTask} items left</p>
      
      <TaskButtonGroup style="hidden lg:flex gap-4" onFilter={onFilter} filter={filter}/>
      
      <a onClick={clearCompletedTask} className='text-xs lg:text-sm text-lmode-grayishBlue1 dark:text-dmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer transition-colors duration-150 ease-in-out'>Clear Completed</a>
    </div>
  )
}

export default TaskInfo