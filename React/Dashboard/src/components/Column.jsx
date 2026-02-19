import Card from "./Card.jsx"
export default function Column({ title, status, tasks }) {
    const filteredTasks = tasks.filter((tasks) => tasks.status === status)
    return (
        <div className="column">
            <h2>{title}</h2>

            <div className="cards">
                {filteredTasks.map((tasks) => (
                    <Card
                        key={tasks.id}
                        title={tasks.title}
                    />
                ))}
            </div>
        </div>
    )
}
