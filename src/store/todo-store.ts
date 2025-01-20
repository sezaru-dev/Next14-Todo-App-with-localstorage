import { TaskFilter, TaskType, TodoState } from '@/types/todo-app-types'
import {create} from 'zustand'
const LOCAL_STORAGE_KEY = "todo:savedTasks"

export const useTodoStore = create<TodoState>((set, get) => ({
  tasks: [], 
  filter: 'all',
  filteredTasks: [],

  /* this code gets todo data from localstorage then set it to tasks */
  loadSavedTasks: () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTasks) {
      const parsedTasks: TaskType[] = JSON.parse(savedTasks) 
      set(() =>({ tasks: parsedTasks }))
      
    }
  },

  /* this code accepts title as parameter,  add it to tasks together with its id, and isCompleted then save it to localstorage */
  addTask: (title:string) => {
    set((state) => ({tasks: [
      ...state.tasks, 
      {
        id: crypto.randomUUID(),
        title: title,
        isCompleted: false
      }
    
    ]}))
    get().saveTaskToLocalStorage(get().tasks)
  },

  /* this code saves task to localstorage */
  saveTaskToLocalStorage: (task:TaskType | TaskType[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(task))
  },

  /* this logic deletes item from tasks by id, then update the data in localstorage */
  deleteTask: (taskId:string) => {
    set((state) => ({tasks: state.tasks.filter((task) => task.id !== taskId)}))
    get().saveTaskToLocalStorage(get().tasks)
  },

  /* this code changes the filter and update what data will be rendered */
  setfilter: (filteredBy: TaskFilter) => { 
    set({ filter: filteredBy })
    get().setFilteredTasks()
  },

  /* this code filtered items that will be rendered*/
  setFilteredTasks: () => {
    const { tasks, filter } = get()
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") {
        return !task.isCompleted
      } else if (filter === "completed") {
        return task.isCompleted
      } else {
        return true;
      } 
    })
    set({ filteredTasks })
  },

  /* this code toggle task completion true/false by id */
  toggleTaskStatus: (taskId:string) => {
    set((state) => ({ tasks: state.tasks.map((task) => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task ) }))
    get().saveTaskToLocalStorage(get().tasks)
  },

    /* this code clear all task */
  clearCompletedTask: () => {
    set((state) => ({tasks: state.tasks.filter((task) => !task.isCompleted)}))
    get().saveTaskToLocalStorage(get().tasks)
  },
  
  
}))
