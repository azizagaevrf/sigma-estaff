import React from 'react'
import './MainPage.scss'
import './Workspace/Workspace.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import List from "./List";
import Interview from "./Workspace/Interview";
import iconStructure from '../../img/structure.svg'
import iconVacancies from '../../img/vacancies.svg'
import iconCandidates from '../../img/candidates.svg'
import iconSigmaSkills from '../../img/sigma-skills.svg'
import iconAdministration from '../../img/administration.svg'
import iconHandbooks from '../../img/handbooks.svg'
import iconActive from '../../img/active.png'
import iconBase from '../../img/base.png'
import iconCalendar from '../../img/calendar.png'
import iconDecision from '../../img/decision.png'
import iconInactive from '../../img/inactive.png'
import iconInterview from '../../img/interview.png'
import iconNewRequest from '../../img/new-request.png'
import iconProbation from '../../img/probation.png'
import iconPublications from '../../img/publications.png'
import iconResponses from '../../img/responses.png'
import iconSigmaSkillsInPng from '../../img/sigma-skills.png'
import iconStatus from '../../img/status.png'
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Active from "./Workspace/Active";


/* Для path '/' убирать из '/...' только если path для mainpage === '/' */


function MainPage() {
  const [activeTab, setActiveTab] = React.useState(0);
  const {path} = useRouteMatch();
  const vacanciesList = [
    {
      id: 1,
      title: 'Активные',
      path: '/active',
      main: () => <Active/>,
      icon: iconActive,
      description: 'Здесь хранятся активные вакансии',
    },
    {
      id: 2,
      title: 'Новые заявки',
      path: '/new-request',
      main: () => <h1>Новые заявки</h1>,
      icon: iconNewRequest,
      description: 'Здесь формируются новые заявки',
    },
    {
      id: 3,
      title: 'Неактивные',
      path: '/inactive',
      main: () => <h1>Неактивные</h1>,
      icon: iconInactive,
      description: 'Здесь хранятся неактивные вакансии',
    },
    {
      id: 4,
      title: 'Публикации',
      path: '/publications',
      main: () => <h1>Публикации</h1>,
      icon: iconPublications,
      description: 'Здесь можно посмотреть опубликованные вакансии',
    },
    {
      id: 5,
      title: 'Отклики с сайтов',
      path: '/responses',
      main: () => <h1>Отклики с сайтов</h1>,
      icon: iconResponses,
      description: 'Здесь можно посмотреть отклики с сайтов',
    },
  ];
  const candidatesList = [
    {
      id: 1,
      title: 'Интервью',
      path: '/interview',
      main: () => <Interview/>,
      icon: iconInterview,
      description: 'Встреча и общение с кандидатом',
    },
    {
      id: 2,
      title: 'Статус',
      path: '/status',
      main: () => <h1>Статус</h1>,
      icon: iconStatus,
      description: 'Отслеживание статуса кандидата',
    },
    {
      id: 3,
      title: 'Решение',
      path: '/decision',
      main: () => <h1>Решение</h1>,
      icon: iconDecision,
      description: 'Решение о приеме, либо отказе кандидату',
    },
    {
      id: 4,
      title: 'Испытательный срок',
      path: '/probation',
      main: () => <h1>Испытательный срок</h1>,
      icon: iconProbation,
      description: 'Прохождение испытательного срока',
    },
    {
      id: 5,
      title: 'Календарь',
      path: '/calendar',
      main: () => <h1>Календарь</h1>,
      icon: iconCalendar,
      description: 'Интеграция с календарем Microsoft Outlook',
    },
    {
      id: 6,
      title: 'Общая база',
      path: '/base',
      main: () => <h1>Общая база</h1>,
      icon: iconBase,
      description: 'Полная база кандидатов за все время',
    },
  ];
  const sigmaSkillsList = [
    {
      id: 1,
      title: 'Сигма Скиллс',
      path: '/skills',
      main: () => <h1>Сигма Скиллс</h1>,
      icon: iconSigmaSkillsInPng,
      description: 'Провести тестирование кандидата в Сигма Скиллс',
    },
  ];
  const tabsInformation = [
    {
      id: 1,
      icon: iconStructure,
      title: 'Структура',
      path: 'structure',
      main: () => <h1>Cтруктура</h1>
    },
    {
      id: 2,
      icon: iconVacancies,
      title: 'Вакансии',
      path: 'vacancies',
      main: () => <List tabs={vacanciesList} title={'Вакансии'}/>
    },
    {
      id: 3,
      icon: iconCandidates,
      title: 'Кандидаты',
      path: 'candidates',
      main: () => <List tabs={candidatesList} title={'Кандидаты'}/>
    },
    {
      id: 4,
      icon: iconSigmaSkills,
      title: 'Sigma Skills',
      path: 'sigma-skills',
      main: () => <List tabs={sigmaSkillsList} title={'Sigma Skills'}/>
    },
    {
      id: 5,
      icon: iconAdministration,
      title: 'Администрирование',
      path: 'administration',
      main: () => <h1>Администрирование</h1>
    },
    {
      id: 6,
      icon: iconHandbooks,
      title: 'Справочники',
      path: 'handbooks',
      main: () => <h1>Справочники</h1>
    }
  ]

  return (
    <div className="container">
      <Header/>
      <Sidebar
        tabsInformation={tabsInformation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="workspace">
        <Switch>
          {tabsInformation.map((tabInfo) =>
            <Route
              path={path + tabInfo.path}
              children={<tabInfo.main/>}
              key={tabInfo.id}
            />
          )}
        </Switch>
      </div>
    </div>
  );
}

export default MainPage


/*const isAdmin = true;
  const history = useHistory();

  function logOut(e) {
    e.preventDefault();

    localStorage.removeItem('user:pass')
    history.push('/sign-in');
  }

  function getTemplate(isAdmin) {
    return (

      <div>
        <h3>Hello</h3>
        <button onClick={e => logOut(e)}>
          Log out
        </button>
        <Link to="/user-list">
          <button>UserList</button>
        </Link>
      </div>
    )
  }

  return (getTemplate(isAdmin))*/