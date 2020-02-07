import React from 'react'
import {StyledDora} from './StyledDora'
import { DoraProvider } from './../DoraContext/dora-context'

import Activator from './Activator/Activator'
import DataList from './DataList/DataList'

const Dora = props => {

  return (
    <DoraProvider>
      <StyledDora>
        <Activator/>
        <DataList props={props}/>
      </StyledDora>
    </DoraProvider>
  )
}

export default Dora