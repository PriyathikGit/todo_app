import { useEffect, useState } from "react"
import Input from "./components/Input"
import Notes from "./components/Notes"

function App() {
  const [input, setInput] = useState("")
  // our note structure
  const [notes, setNotes] = useState([])
  const [complete, setComplete] = useState(false)


  const handleAdd = () => {

    setNotes((prev) =>
      [
        ...prev,
        { id: Date.now(), note: input, isCompleted: complete }
      ]
    )
    setInput("")
  }

  console.log(notes);
  
  const handleDelete = (noteId) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== noteId)
    )
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen flex-col bg-black text-white">
        <h1 className='text-3xl font-bold mb-6'>Add Your Notes here</h1>
        <Input input={input} setInput={setInput} handleAdd={handleAdd} />
        <Notes
          note={notes}
          complete={complete}
          setComplete={setComplete}
          handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
