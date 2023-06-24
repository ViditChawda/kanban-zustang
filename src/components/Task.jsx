import './Task.css'

const STATUS = 'DONE'

export default function Task({ title }) {
    return <div className="task">
        <div>{title}</div>
        <div className='bottomWrapper'>
            <div></div>
            <div className={STATUS}>{STATUS}</div>
        </div>
    </div>
}