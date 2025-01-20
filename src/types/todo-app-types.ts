export type TaskType ={ 
  id: string; 
  title: string; 
  isCompleted: boolean;
} 

export type TaskFilter = "all" | "active" | "completed";

export type TodoState = { 
  tasks: TaskType[];
  filter: TaskFilter
  filteredTasks: TaskType[]
  loadSavedTasks: () => void;
  addTask: (title:string) => void;
  saveTaskToLocalStorage: (task:TaskType | TaskType[]) => void;
  deleteTask: (taskId:string) => void;
  setfilter: (filteredBy: TaskFilter) => void;
  setFilteredTasks: () => void;
  toggleTaskStatus: (taskId:string) => void
  clearCompletedTask: () => void
} 