import React, {useContext, useEffect} from 'react'
import {StyledDataListWrapper as Wrapper} from './StyledDataList'
import {DoraContext} from './../../DoraContext/dora-context'

import {default as List} from './List/List'

const DataList = ({props}) => {
  const context = useContext(DoraContext)
  const getContext = context.def
  const setContext = context.setDef

  useEffect(() => {
    setContext({
      ...getContext, 
      data: props.data
    })
  }, []);

  // console.log(getContext)

  return(
    <Wrapper toggle={getContext.expanded}>
      <List />
    </Wrapper>
  )
}

export default DataList