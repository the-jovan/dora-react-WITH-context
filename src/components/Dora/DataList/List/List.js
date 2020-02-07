import React, {useContext} from 'react'
import {DoraContext} from './../../../DoraContext/dora-context'
import {StyledDataList as DataListUl} from './StyledList'

import ListElement from './ListElement/ListElement'

const DataList = () => {

  const context = useContext(DoraContext)
  const getContext = context.def
  // const setContext = context.setDef

  return (
    <DataListUl>
      {[...getContext.data].map((e,i) => {
        return <ListElement key={i}/>
      })}
    </DataListUl>
  )
}

export default DataList