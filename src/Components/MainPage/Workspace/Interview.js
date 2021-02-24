import React from "react"
import Tabs from '../Tabs'


const tabsInfo = [
  {
    id: 1,
    component: () => <div>1</div>,
    title: 'first',
  },
  {
    id: 2,
    component: () => <div>2</div>,
    title: 'second',
    active: true
  },
  {
    id: 3,
    component: () => <div>3</div>,
    title: 'third'
  },
]


function Interview() {


  return (
    <div>
      <Tabs tabsInfo={tabsInfo}/>
    </div>
  )
}


export default Interview