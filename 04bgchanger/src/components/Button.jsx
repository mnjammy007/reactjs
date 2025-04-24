import React from 'react'

function Button({ title = "Red", textColor = "white", setBgColor }) {
    return (
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: title.toLowerCase(), color: textColor }} onClick={() => setBgColor(title.toLowerCase())}>{title}</button>
    )
}

export default Button