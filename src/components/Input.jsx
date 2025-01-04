import React from 'react'

const Input = ({ input, setInput,handleAdd }) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    


    return (
        <>
            <div className='flex gap-12 items-center'>
                <input
                    value={input}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder='enter your notes here'
                    className='w-80 md:w-[50rem] h-10 p-4 text-black'
                />
                <button 
                onClick={handleAdd}
                className='w-[5rem] h-[3rem] bg-pink-500 cursor-pointer'>Add</button>
            </div>
        </>
    )
}

export default Input