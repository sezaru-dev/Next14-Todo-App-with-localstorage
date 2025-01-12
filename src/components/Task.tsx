import React from 'react'
import Image from 'next/image'
import { TaskType } from '@/app/page'
import IconCheck from '@/public/icon-check.svg'
import IconCross from '@/public/icon-cross.svg'

type TaskProps = {
  task: TaskType
  deleteTask: (taskId: number) => void
  toggleTask: (taskId: number) => void
}

const Task = ({task, deleteTask, toggleTask}:TaskProps) => {
  return (
    <div className='py-4 px-5 lg:py-5 lg:px-6 bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue flex items-center gap-6 group colorModeTransition'>
      
      <button onClick={() => toggleTask(task.id)}>
        {task.isCompleted? 
          <div className='h-6 w-6 rounded-full flex-none flex items-center justify-center checkGradient'>
            <div>
              <Image src={IconCheck} alt="delete task" width="14" height="14"/>
            </div>
          </div>  :
          <div className='h-6 w-6 rounded-full flex-none circleGradientBorder flex items-center justify-center transition-colors duration-150 ease-in-out'>
            <div className=' h-[1.38rem] w-[1.38rem] rounded-full bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue colorModeTransition'/>
          </div> 
        }
      </button>

      <p className={`${task.isCompleted?  `completed` : 'inComplete'} bg-[transparent] text-xs lg:text-base flex-1 truncate`}>{task.title}</p>
      
      <button className='hidden group-hover:block'  onClick={() => deleteTask(task.id)}>
        <Image src={IconCross} alt="delete task" width="14" height="14"/>
      </button>

    </div>
  )
}

export default Task