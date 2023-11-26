import { useState } from "react"

export default function Box({children}) {
  const [isOpen, setIsOpen] = useState(true);

  return ( 
    <div className="box">
    <button className="btn-toggle" onClick={() => setIsOpen((current) => !current)}>
      {isOpen ? '-' : '+'}
    </button>
{isOpen && children}
    </div>
  )
}