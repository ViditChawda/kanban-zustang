import { useStore } from '../store';
import './Column.css'
import Task from './Task'
import { shallow } from 'zustand/shallow'


export default function Column({ state }) {
    // const tasks = useStore((store) => store.tasks.filter((task) => task.state === state))
    const tasks = useStore(
        (store) => store.tasks.filter((task) => task.state === state)
    )

    return <div className="column">
        <p>{state}</p>
        {
            tasks.map((task) => <Task title={task.title} key={task.title}/>)
        }
    </div>
}