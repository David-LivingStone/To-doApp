import {FaTimes} from 'react-icons/fa'

const task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style= {{color: 'green', cursor: 'pointer'}} 
      onClick = {() => onDelete(task.id)}/></h3>
      <h3>{task.day}</h3>
    </div>
  )
}

export default task
 