import { useStore } from '../store'
import './Task.css'
import { AiOutlineDelete } from 'react-icons/ai'

export default function Task({ title }) {

    const task = useStore((store) => store.tasks.find((task) => task.title === title))
    const deleteTask = useStore((store) => store.deleteTask)
    return <div className="task">
        <div>{title}</div>
        <div className='bottomWrapper'>
            <div onClick={() => deleteTask(title)}><AiOutlineDelete className='icon-delete'/></div>
            <div className={task.state}> {task.state}</div>
        </div>
    </div>
}