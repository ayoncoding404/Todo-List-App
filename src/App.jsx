import './App.css'
import TaskForm from './Components/TaskForm'

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 2</section>
        <section className="task_column"> SEction 3</section>
      </main>
    </div>
  )
}

export default App