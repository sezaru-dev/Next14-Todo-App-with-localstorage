'use client'
import React, {useState} from 'react'
import {TodoDesignImages} from '@/constants/images'
import Image from 'next/image'
import { useTodoStore } from '@/store/todo-store'

type HeaderProps = {
  currentTheme?: string | undefined
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({currentTheme, setTheme}: HeaderProps) => {
  const {bgMobileDark,bgMobileLight,bgDesktopDark,bgDesktopLight,sunIcon,moonIcon} = TodoDesignImages
  const addTask = useTodoStore((state) => state.addTask)
  const [title, setTitle] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title) {      
      addTask(title.trim())
      setTitle('')
    }
  }

  const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <header className='relative h-[12.5rem] lg:h-[18.75rem] w-full'>

      {/* backgroud image small screen */}
      <div className='lg:hidden h-[12.5rem] lg:h-[18.75rem] absolute top-0 left-0 right-0 -z-10'>
      {
        currentTheme === 'dark'
        ? <Image src={bgMobileDark} alt='bg-mobile-dark.jpg' fill priority className='object-cover'/> 
        : <Image src={bgMobileLight} alt='bg-mobile-light.jpg' fill priority className='object-cover'/> 
      }
      </div>

      {/* backgroud image large screens */}
      <div className='hidden lg:block h-[12.5rem] lg:h-[18.75rem] absolute top-0 left-0 right-0 -z-10'>
      {
        currentTheme === 'dark'
        ? <Image src={bgDesktopDark} alt='bg-mobile-dark.jpg' fill priority className='object-cover'/> 
        : <Image src={bgDesktopLight} alt='bg-mobile-light.jpg' fill priority className='object-cover'/> 
      }
      </div>

      <div className='max-w-[582px] px-5 mx-auto pt-10 lg:pt-20'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl lg:text-[2.55rem] text-lmode-veryLightGray font-bold tracking-[.6em] lg:tracking-[0.4em]'>TODO</h1>
          
          {currentTheme === 'dark' ? (
              <button
                className=" h-7 w-7"
                onClick={() => setTheme('light')}
              >
                <Image src={sunIcon} alt="sun.svg" />
              </button>
            ) : (
              <button
              className=" h-7 w-7"
              onClick={() => setTheme('dark')}
              >
              <Image src={moonIcon} alt="moon.svg" />
                
              </button>
            )}
        </div>

        <form onSubmit={handleSubmit} className='bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue py-4 px-5 lg:py-5 lg:px-6 rounded-md flex items-center gap-5 mt-8 lg:mt-12 colorModeTransition'>
          <div className='circle colorModeTransition'/>
          <input type="text" onChange={onChangeTitle} value={title} placeholder='Create a new Todo..' className='bg-[transparent] dark:bg-[transparent] text-lmode-grayishBlue2 dark:text-dmode-lightGrayishBlue text-xs lg:text-base font-bold placeholder:font-normal placeholder:text-dmode-grayishBlue1 outline-none border-none flex-1 colorModeTransition' />
        </form>
      </div>
    </header>
  )
}
