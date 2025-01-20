import React from 'react'
import Image from 'next/image'
import { useTodoStore } from '@/store/todo-store'
import { TaskType } from '@/types/todo-app-types'
import { TodoDesignImages } from '@/constants/images'

type TaskItemProps = { 
  task: TaskType
}

const Task = ({task}:TaskItemProps) => {
  const {IconCheck, IconCross} = TodoDesignImages
  const toggleTaskStatus = useTodoStore((state:any) => state.toggleTaskStatus)
  const deleteTask = useTodoStore((state:any) => state.deleteTask)
  
  return (
    <div className='py-4 px-5 lg:py-5 lg:px-6 bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue flex items-center gap-6 group colorModeTransition'>
      
      <button onClick={() => toggleTaskStatus(task.id)}>
        {/* changes radiobutton icon onToggle */}
        {task.isCompleted
          ? 
          <div className='h-6 w-6 rounded-full flex-none flex items-center justify-center checkGradient'>
            <div>
              <Image src={IconCheck} alt="delete task" width="14" height="14"/>
            </div>
          </div> 
          :
          <div className='h-6 w-6 rounded-full flex-none circleGradientBorder flex items-center justify-center transition-colors duration-150 ease-in-out'>
            <div className=' h-[1.38rem] w-[1.38rem] rounded-full bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue colorModeTransition'/>
          </div> 
        }
      </button>

      <p className={`${task.isCompleted?  `completed` : 'inComplete'} bg-[transparent] text-xs lg:text-base flex-1 truncate`}>{task.title}</p>
      
      {/* deletes task */}
      <button className='hidden group-hover:block'  onClick={() => deleteTask(task.id)}>
        <Image src={IconCross} alt="delete task" width="14" height="14"/>
      </button>

    </div>
  )
}

export default Task