import React, {useContext} from 'react'
import {DoraContext} from './../../../DoraContext/dora-context'
import { StyledActivatorDisplay as Display } from './StyledActivatorDisplay'

const ActivatorDisplay = () => {
  const context = useContext(DoraContext)
  const getContext = context.def
  const setContext = context.setDef

  const createDisplay = () => {
    if (getContext.selectedElements.size > 0) {
      // return [...getContext.selectedElements].map((e,id) => {
      //   <DisplaySelectedElement
      //     key={id}
      //   />
      // })
    } else return getContext.title
  }

  return (
    <Display onClick={() => setContext({...getContext, expanded: !getContext.expanded})}>
      {createDisplay()}
    </Display>
  )
}

export default ActivatorDisplay