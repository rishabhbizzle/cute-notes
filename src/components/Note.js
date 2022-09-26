import { MdDeleteForever } from 'react-icons/md';
import anya2 from './assets/anya2.webp'

import React from 'react'

export default function Note({ id, text, date, handleDeleteNote}) {
  return (
	<div className="note-full">
		<div className="image">
		<img src={anya2} alt="ddd" />

		</div>
    <div className='note'>
        <span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
                </div>
    </div>
	</div>
  )
}