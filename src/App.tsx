import './App.css';
import { useState, useEffect } from "react";

// Define the structure of a note.
type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  // State to hold the list of notes.
  const [notes, setNotes] = useState<Note[]>([]);
  
  // States to hold the input values for adding/editing a note.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // State to hold the currently selected note for editing.
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Fetch notes from the backend when the component mounts.
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/notes");
        const notes: Note[] = await response.json();
        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNotes();
  }, []);

  // Handle adding a new note.
  const handleAddNote = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const newNote = await response.json();

      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");
    } catch (e) {
      console.log(e);
    }
  };

  // Handle deleting a note by its ID.
  const deleteNote = async (event: React.MouseEvent, noteId: number) => {
    event.stopPropagation();

    try {
      await fetch(`http://localhost:5001/api/notes/${noteId}`, {
        method: "DELETE",
      });
      const updatedNotes = notes.filter(note => note.id !== noteId);
      setNotes(updatedNotes);
    } catch (e) {
      console.log(e);
    }
  };

  // Select a note for editing.
  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  // Handle updating a selected note.
  const handleUpdateNote = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNote) return;

    try {
      const response = await fetch(`http://localhost:5001/api/notes/${selectedNote.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      });

      const updatedNote: Note = await response.json();

      const updatedNotesList = notes.map(note =>
        note.id === selectedNote.id ? updatedNote : note
      );

      setNotes(updatedNotesList);
      setTitle("");
      setContent("");
      setSelectedNote(null);
    } catch (e) {
      console.log(e);
    }
  };

  // Cancel the note editing process.
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  return (
    <div className="app-container">
      {/* Form for adding/editing notes */}
      <form
        className="note-form"
        onSubmit={(event) => (selectedNote ? handleUpdateNote(event) : handleAddNote(event))}
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>
      
      {/* Display list of notes */}
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item" key={note.id} onClick={() => handleNoteClick(note)}>
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
