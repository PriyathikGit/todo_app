import { useEffect, useState } from "react"
import Input from "./components/Input"
import Notes from "./components/Notes"

function App() {
  const [input, setInput] = useState("")
  // our note structure
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes")
    return savedNotes ? JSON.parse(savedNotes) : []
  })
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const handleAdd = () => {
    if (input.trim() === "") return
    setNotes((prev) =>
      [
        ...prev,
        { id: Date.now(), note: input, isCompleted: false }
      ]
    )
    setInput("")
  }

  const handleDelete = (noteId) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== noteId)
    )
  }

  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id)
    setEdit(id)
    setInput(noteToEdit.note)
  }

  const handleUpdate = () => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === edit ? { ...note, note: input } : note
      )
    )
    setEdit(null)
    setInput("")
  }

  const toggleComplete = (noteId) => {
    setNotes((prev) =>
      prev.map((note) => // map all previous note
        note.id === noteId ? // if current note id = noteid which we passed
          { ...note, isCompleted: !note.isCompleted } // all property remain same, toggle the complete
          : note // else stay as previous
      )
    )
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen flex-col bg-black text-white">
        <h1 className='text-3xl font-bold mb-6'>Add Your Notes here</h1>
        <Input
          input={input}
          setInput={setInput}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
          edit={edit}
        />
        <Notes
          note={notes}
          handleDelete={handleDelete}
          handleToggle={toggleComplete}
          handleEdit={handleEdit}

        />
      </div>
    </>
  )
}

export default App
