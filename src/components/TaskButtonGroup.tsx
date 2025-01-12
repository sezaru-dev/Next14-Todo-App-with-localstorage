import { TaskType } from "@/app/page"
type ButtonGroupOwnProps = {
  style: string
  onFilter: (filterText:string) => void
  filter: string
}

const TaskButtonGroup = ({style, onFilter, filter}: ButtonGroupOwnProps) => {

  return (
      <div className={`${style} bg-lmode-veryLightGray dark:bg-dmode-darkDesaturatedBlue rounded-md flex items-center justify-center text-xs lg:text-sm font-bold shadow-lg lg:shadow-none colorModeTransition`}>

        <button onClick={() => onFilter('all')} className={`${filter === "all" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>All</button>

        <button onClick={() => onFilter('active')} className={`${filter === "active" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>Active</button>

        <button onClick={() => onFilter('completed')} className={`${filter === "completed" ? 'activeBtn' : ""} text-lmode-grayishBlue1 hover:text-lmode-grayishBlue2 dark:hover:text-dmode-lgbHover cursor-pointer flex-none transition-colors duration-150 ease-in-out`}>Completed</button>

      </div>
  )
}

export default TaskButtonGroup