import React from "react";
import "../styles/Note.css"
import { useTheme } from "../context/ThemeContext";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    const { theme } = useTheme();
    const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

    return (
        <div className={`note-container ${themeClass}`}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note