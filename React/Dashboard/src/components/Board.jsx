import { useState } from "react"
import Column from "./Column.jsx"
import TaskForm from "./TaskForm.jsx"

export default function Board() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Estudar react", status: "todo" },
        { id: 2, title: "Criar projeto", status: "doing" },
        { id: 3, title: "Descansar", status: "done" },
    ])

    function addTask(newTask) {
        setTasks((prev) => [...prev, newTask])
    }

    return (
        <>
            <TaskForm onAddTask={addTask} />

            <div className="board">
                <Column
                    title="A fazer"
                    status="todo"
                    tasks={tasks}
                />
                <Column
                    title="Em progresso"
                    status="doing"
                    tasks={tasks}
                />
                <Column
                    title="Concluido"
                    status="done"
                    tasks={tasks}
                />
            </div>
        </>
    )
}
