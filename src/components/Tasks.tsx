import React from 'react'
import Task from './Task'
import TaskInfo from './TaskInfo'
import TaskButtonGroup from './TaskButtonGroup'
import { TaskType } from '@/app/page'

type TasksProps ={
  tasks: TaskType[] | null
  deleteTask: (taskId: number) => void
  toggleTask: (taskId: number) => void
  setTasks: (setTask:TaskType[]) => void
  onFilter: (filterText:string) => void
  filteredTasks: TaskType[]
  filter: string
  clearCompletedTask: () => void
}


const Tasks = ({tasks, deleteTask, toggleTask, setTasks, onFilter, filteredTasks, filter, clearCompletedTask}: TasksProps) => {
  return (
    <section className='relative -top-7 lg:-top-12'>
      <div className='max-w-[582px] px-5  mx-auto'>
        <div className='overflow-hidden rounded-lg divide-y-[1px] divide-lmode-lightGrayishBlue dark:divide-dmode-grayishBlue3 shadow-lg colorModeTransition'>
          {
            filteredTasks.map(task => (
              <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))
          }

          <TaskInfo tasks={tasks} setTasks={setTasks} onFilter={onFilter} filter={filter} clearCompletedTask={clearCompletedTask}/>
        </div>

        <TaskButtonGroup  style="lg:hidden py-4 px-5 mt-4 gap-5"  onFilter={onFilter} filter={filter}/>

      </div>

    </section>
  )
}

export default Tasks