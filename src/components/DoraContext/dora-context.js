import React, { useState, createContext } from 'react'

export const DoraContext = createContext()

export const DoraProvider = props => {
  const [def, setDef] = useState({
    title: 'select something',
    expanded: false,
    selectedElements: new Set(),
    data: [],
    showForm: true
  })
  
  return (
    <DoraContext.Provider value={{def, setDef}}>
      {props.children}
    </DoraContext.Provider>
  )
}