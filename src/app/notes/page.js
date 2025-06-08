import NotesPage from '@/components/notes/Notes'
import React from 'react'
import { getAllNotes } from '../api/services'

const page = async () => {
    const notesData = await getAllNotes();
    if (notesData.error) {
        return <p>No Notes Found</p>
    }
    return (
        <div>
            <NotesPage notes={notesData.data?.notes} />
        </div>
    )
}

export default page
