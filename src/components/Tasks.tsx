import React, { useEffect } from 'react'
import Task from './Task'
import TaskInfo from './TaskInfo'
import TaskButtonGroup from './TaskButtonGroup'
import { useTodoStore } from '@/store/todo-store'
import { TaskType } from '@/types/todo-app-types'

const Tasks = () => {
  const tasks = useTodoStore((state:any) => state.tasks)
  const filter = useTodoStore((state:any) => state.filter)
  const filteredTasks = useTodoStore((state:any) => state.filteredTasks)
  const setFilteredTasks = useTodoStore((state:any) => state.setFilteredTasks)
  
  useEffect(() => {
    setFilteredTasks()
  },[tasks, filter])

  return (
    <section className='relative -top-7 lg:-top-12'>
      <div className='max-w-[582px] px-5  mx-auto'>
        <div className='overflow-hidden rounded-lg divide-y-[1px] divide-lmode-lightGrayishBlue dark:divide-dmode-grayishBlue3 shadow-lg colorModeTransition'>
          {/* Task items */}
          {
            filteredTasks.map((task:TaskType) => 
              (<Task key={task.id} task={task}  />)
            )
          }
          {/* task footer with info and buttons */}
          <TaskInfo/>
        </div>
        
        <TaskButtonGroup  style="lg:hidden py-4 px-5 mt-4 gap-5"/>
      </div>
    </section>
  )
}

export default Tasks