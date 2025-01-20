'use client'
import { useEffect, useState } from "react";
import {useTodoStore } from '@/store/todo-store'
import {useTheme} from 'next-themes'
import { Header } from "@/components/Header";
import Tasks from "@/components/Tasks";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const loadSavedTasks = useTodoStore((state:any) => state.loadSavedTasks)

  useEffect(() =>{
    loadSavedTasks()
    setMounted(true);
  },[])

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <Header
        currentTheme={currentTheme}
        setTheme={setTheme}
      />

      <Tasks/>

    </>
  )
}
