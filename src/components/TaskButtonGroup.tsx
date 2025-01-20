import { useTodoStore } from "@/store/todo-store"
type ButtonGroupOwnProps = {
  style: string
}

const TaskButtonGroup = ({style}: ButtonGroupOwnProps) => {
  const filter = useTodoStore((state) => state.filter)
  const setfilter = useTodoStore((state) => state.setfilter)
  return (
      <div className={`${style} bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue rounded-md flex items-center justify-center text-xs lg:text-sm font-bold shadow-lg lg:shadow-none colorModeTransition`}>
        <button onClick={() => setfilter('all')} className={`${filter === "all" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>All</button>
        <button onClick={() => setfilter('active')} className={`${filter === "active" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>Active</button>
        <button onClick={() => setfilter('completed')} className={`${filter === "completed" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>Completed</button>
      </div>
  )
}

export default TaskButtonGroup