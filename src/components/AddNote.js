import React, { useState } from 'react'
import anya2 from './assets/anya3.png'
import anyaAudio from './assets/waku.mp3'


export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) =>{
      if (characterLimit - event.target.value.length >= 0) {
        setNoteText(event.target.value);
      }
  }

  let audio = new Audio(anyaAudio)

  const handleSaveClick = () =>{
    if (noteText.trim().length > 0) {
      audio.play()

          handleAddNote(noteText);
          setNoteText('');
		}
  }
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSaveClick()
  //   }
  // }

  return (
    <div className="note-full">
		<div className="image">
		  <img src={anya2} alt="" />
		</div>
    <div className='note new'>
        <textarea id="" cols="10" rows="8" value={noteText} placeholder='Type to add a note...' onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick} >
          Save
        </button>
      </div>
    </div>
    </div>
  )
}
