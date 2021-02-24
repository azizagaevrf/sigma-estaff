import React from "react"
import './Active.scss'
import InputText from "../InteractionComponents/InputText";
import Tabs from '../Tabs'
import Select from "../InteractionComponents/Select";
import ButtonAddSkill from "../InteractionComponents/ButtonAddSkill";
import Button from "../InteractionComponents/Button";
import '../InteractionComponents/ReactTags.scss'
import {WithContext as ReactTags} from 'react-tag-input';
import TextArea from "../InteractionComponents/TextArea";


function reconstructData(data) {
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].map((item, index) => {
        let newItem = {
          id: (index + 1).toString()
        };
        item instanceof Object ?
          newItem = {...newItem, ...item} :
          newItem.value = item;
        return newItem;
      })
    } else if (data[key] === null) {
      data[key] = '';
    }
  }
  return data
}

const cvReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ALL_ITEMS': {
      return {...state, ...action.obj}
    }

    case 'UPDATE_ITEM': {
      return {...state, [action.keyName]: action.value}
    }

    case 'UPDATE_ITEM_IN_ARRAY': {
      const newArray = state[action.keyName].map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            value: action.value
          }
        }
        return item
      })

      return {...state, [action.keyName]: newArray}
    }

    case 'DELETE_ITEM_IN_ARRAY': {
      const newArray = [].concat(state[action.keyName])
      const index = newArray.findIndex(item => item.id === action.id)
      newArray.splice(index, 1)

      return {...state, [action.keyName]: newArray}
    }

    case 'ADD_ITEM_IN_ARRAY': {
      const array = state[action.keyName]

      const id = array.length === 0 ?
        '1' :
        (Number(array[array.length - 1].id) + 1).toString();

      return {
        ...state,
        [action.keyName]: [...array, {id, value: ''}]
      }
    }

    case 'ADD_TAG_ITEM_IN_ARRAY': {
      return {...state, [action.keyName]: [...state[action.keyName], action.value]}
    }

    case 'DELETE_TAG_ITEM_IN_ARRAY': {
      let newArr = state[action.keyName];
      newArr = newArr.filter((item, index) => index !== action.id);

      return {...state, [action.keyName]: newArr}
    }

    default: {
      return state
    }
  }
}


function Active() {
  const [cvData, dispatchCvData] = React.useReducer(cvReducer, {
    name: '',
    surname: '',
    middleName: '',
    gender: 'Мужчина',
    dateOfBirth: '',
    address: '',
    citizenship: '',
    communication: [],
    employment: '',
    positionObjective: '',
    salary: '',
    skills: [],
    skillsLanguage: [],
    addInformation: '',

    experience: [],
    jobExperienceMonth: '',
    jobExperienceYear: '',

    educationShort: '',
    education: [],
    addEducation: [],
  })

  let GeneralInfo = <div className='Active__flex'>
    <InputText
      className={'Active__InputText'}
      title={'Имя'}
      value={cvData.name}
      setValue={handleInputUpdate('name')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Фамилия'}
      value={cvData.surname}
      setValue={handleInputUpdate('surname')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Отчество'}
      value={cvData.middleName}
      setValue={handleInputUpdate('middleName')}
    />
    <div className={'Active__break'}/>
    <Select
      className={'Active__Select'}
      title='Пол'
      placeholder
      options={['Мужчина', 'Женщина']}
      value={cvData.gender}
      setValue={handleInputUpdate('gender')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Дата рождения'}
      value={cvData.dateOfBirth}
      setValue={handleInputUpdate('dateOfBirth')}
    />
    <div className={'Active__break'}/>
    <InputText
      className={'Active__InputText'}
      title={'Страна'}
      value={cvData.citizenship}
      setValue={handleInputUpdate('citizenship')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Город'}
      value={cvData.address}
      setValue={handleInputUpdate('address')}
    />
    <div className={'Active__break'}/>
    <InputText
      className={'Active__InputText'}
      title={'Должность'}
      value={cvData.positionObjective}
      setValue={handleInputUpdate('positionObjective')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Тип занятости'}
      value={cvData.employment}
      setValue={handleInputUpdate('employment')}
    />
    <InputText
      className={'Active__InputText'}
      title={'Зарплата'}
      value={cvData.salary}
      setValue={handleInputUpdate('salary')}
    />
    <div className={'Active__break'}/>
    <TextArea
      className={'Active__InputText'}
      title={'Дополнительная информация'}
      value={cvData.addInformation}
      setValue={handleInputUpdate('addInformation')}
    />
    <div className={'Active__break'}/>
    <ButtonAddSkill
      className={'Active__ButtonAddSkill'}
      title={'Добавить способ связи'}
      addElement={handleInputAddInArray('communication')}
    />
    {cvData.communication.map((item) =>
      <InputText
        className={'Active__InputText'}
        title={'Способ связи'}
        value={item.value}
        key={item.id}
        setValue={handleInputUpdateInArray('communication', item.id)}
        deleteElement={handleInputDeleteInArray('communication', item.id)}
      />
    )}
    <div className={'Active__break'}/>
    <ReactTags
      labelField='value'
      tags={cvData.skills}
      inputFieldPosition='top'
      allowDragDrop={false}
      placeholder='Добавить навык'
      inline
      handleAddition={handleTagAddInArray('skills')}
      handleDelete={handleTagDeleteInArray('skills')}
    />
    <div className={'Active__break'}/>
    <ReactTags
      labelField='value'
      tags={cvData.skillsLanguage}
      inputFieldPosition='top'
      allowDragDrop={false}
      placeholder='Добавить язык'
      inline
      handleAddition={handleTagAddInArray('skillsLanguage')}
      handleDelete={handleTagDeleteInArray('skillsLanguage')}
    />
  </div>;
  let EducationInfo = <div className='Active__grid'>
    <InputText
      className={'Active__InputText'}
      title={'Образование'}
      value={cvData.educationShort}
      setValue={handleInputUpdate('educationShort')}
    />
    <ButtonAddSkill
      title={'Добавить образование'}
      addElement={handleInputAddInArray('education')}
    />
    {cvData.education.map((item) =>
      <InputText
        className={'Active__InputText'}
        title={'Образование'}
        value={item.institution}
        key={item.id}
        setValue={handleInputUpdateInArray('education', item.id)}
        deleteElement={handleInputDeleteInArray('education', item.id)}
      />
    )}
  </div>;
  let JobExperienceInfo = <div className='Active__grid'>
    <Button title={'Button'}/>
    <ButtonAddSkill title={'Add skill'}/>
  </div>;

  const tabsInfo = [
    {
      id: 1,
      component: GeneralInfo,
      title: 'Основная информация',
      active: true
    },
    {
      id: 2,
      component: EducationInfo,
      title: 'Образование'
    },
    {
      id: 3,
      component: JobExperienceInfo,
      title: 'Опыт работы'
    },
  ]


  function handleFileInput(e) {
    const DOC_MIME = 'application/msword'
    const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    const PDF_MIME = 'application/pdf'
    const file = e.target.files[0]

    if (file !== undefined) {
      let url;

      if (file.type === DOC_MIME || file.type === DOCX_MIME) {
        url = 'doc'
      } else if (file.type === PDF_MIME) {
        url = 'http://sigma.simsim.ftp.sh:80/api/documents/resume/pdf'
      } else {
        alert('Выберите файл с расширением pdf или doc')
        return
      }

      let formData = new FormData()
      formData.append('file', file)

      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(result => dispatchCvData({
          type: 'UPDATE_ALL_ITEMS',
          obj: reconstructData(result)
        }))
    }
  }

  function handleInputUpdate(keyName) {
    return (value) => dispatchCvData({type: 'UPDATE_ITEM', keyName, value})
  }

  function handleInputUpdateInArray(keyName, id) {
    return (value) => dispatchCvData({
      type: 'UPDATE_ITEM_IN_ARRAY',
      keyName,
      value,
      id
    })
  }

  function handleInputDeleteInArray(keyName, id) {
    return () => dispatchCvData({
      type: 'DELETE_ITEM_IN_ARRAY',
      keyName,
      id
    })
  }

  function handleInputAddInArray(keyName) {
    return () => dispatchCvData({
      type: 'ADD_ITEM_IN_ARRAY',
      keyName
    })
  }

  function handleTagAddInArray(keyName) {
    return (value) => dispatchCvData({
      type: 'ADD_TAG_ITEM_IN_ARRAY',
      keyName,
      value
    })
  }

  function handleTagDeleteInArray(keyName) {
    return (id) => dispatchCvData({
      type: 'DELETE_TAG_ITEM_IN_ARRAY',
      keyName,
      id
    })
  }

  return (
    <div className={'Active'}>
      <input
        type='file'
        onChange={(e) => handleFileInput(e)}
      />
      <Button
        title='Log'
        clickHandler={() => console.log(cvData)}
      />
      <Tabs tabsInfo={tabsInfo}/>

    </div>
  )
}

export default Active