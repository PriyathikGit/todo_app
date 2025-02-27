import React from 'react'

const Notes = ({ note, handleDelete, handleToggle, handleEdit }) => {
    return (
        <div>
            {note === null ? <p>no notes available</p>
                : note.map((item) => (
                    <div key={item?.id} className={
                        item?.isCompleted ? `w-[60rem] h-[5rem] flex items-center justify-between mt-4 bg-green-500` : ` w-[60rem] h-[5rem] flex items-center justify-between mt-4 bg-slate-600`
                    }>
                        <p>{item?.note}</p>
                        <div className='flex gap-4 mr-4 items-center cursor-pointer'>
                            <input
                                checked={item?.isCompleted}
                                onChange={() => handleToggle(item?.id)}
                                className='w-20 h-6'
                                type="checkbox"
                            />
                            <button
                                onClick={() => handleEdit(item.id)}
                                className='w-[5rem] h-[3rem] bg-pink-500 cursor-pointer'>Edit</button>
                            <button
                                onClick={() => handleDelete(item?.id)}
                                className='w-[5rem] h-[3rem] bg-purple-900 cursor-pointer'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Notes