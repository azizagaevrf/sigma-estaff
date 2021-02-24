import React from 'react'
import './Tabs.scss'


function Tabs({tabsInfo}) {
  const [activeTab, setActiveTab] = React.useState(tabsInfo.find(item => item.active).id);
  const tabClasses = 'Tabs__tab'

  function handleSetActiveTab(id) {
    setActiveTab(id)
  }

  function setActive(id) {
    return activeTab === id ? tabClasses + ' Tabs__tab_active' : tabClasses
  }


  return (
    <>
      <div className={'Tabs'}>
        {tabsInfo.map(tab =>
          <div className={setActive(tab.id)}
               onClick={() => handleSetActiveTab(tab.id)}
               key={tab.id}>
            <div className={'Tabs__title'}>
              {tab.title}
            </div>
            <div className={'Tabs__line'}/>
          </div>
        )}
      </div>
      {tabsInfo.find(item => item.id === activeTab).component}
    </>
  )
}


export default Tabs