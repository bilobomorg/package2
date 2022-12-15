import React from 'react'
import Package1 from '@bilobom/package1'

const Package2 = () => {
  return (
    <React.Fragment>
      <div>package2 utilizing package1 : </div>
      <Package1 />
    </React.Fragment>
  )
}

export default Package2
