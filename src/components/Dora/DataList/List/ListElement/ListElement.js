import React, {useContext} from 'react'
import {DoraContext} from './../../../../DoraContext/dora-context'
import {StyledDataListElement as Element} from './StyledListElement'

const ListElement = () => {
  const context = useContext(DoraContext)
  const getContext = context.def
  const setContext = context.setDef

  return (
    <Element onClick={() => {}}>
      Some text
    </Element>
  )
}

export default ListElement