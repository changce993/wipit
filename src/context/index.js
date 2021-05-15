import React from 'react';
import SidebarState from './sidebar/sidebarState';
import UserState from './user/userState';
import DarkModeState from './darkMode/darkModeState';
import TasksState from './tasks/tasksState';

const Ctx = ({ children }) => {
  return (
    <SidebarState>
      <UserState>
        <DarkModeState>
          <TasksState>
            {children}
          </TasksState>
        </DarkModeState>
      </UserState>
    </SidebarState>
  )
}

export default Ctx
