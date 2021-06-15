import React, { useEffect, useContext } from 'react';
import { Sidebar } from 'components/Template';
import { useTranslation } from 'react-i18next'
import { QUERY_TASK, QUERY_USERNAME } from 'utils/constants';
import tasksContext from 'context/tasks/tasksContext';
import { useSidebar } from 'hooks';
import { MockTasks } from 'Mocks';
import Socket from './Socket';

const Index = () => {
  const { t } = useTranslation();
  const { handleShowSidebar, SIDEBAR_OPTIONS } = useSidebar();
  const { getTask } = useContext(tasksContext);

  useEffect(() => {
    getTask(MockTasks[0]);
    (QUERY_TASK) && handleShowSidebar(SIDEBAR_OPTIONS.task);
    (QUERY_USERNAME) && handleShowSidebar(SIDEBAR_OPTIONS.userProfile);
    // eslint-disable-next-line
  }, []);

  return (
    <Sidebar>
      {/* {t("test")} */}
      <Socket/>
    </Sidebar>
  )
}

export default Index
