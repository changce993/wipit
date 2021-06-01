import React, { useEffect } from 'react';
import { Fullwidth } from 'components/Template';
import { useTranslation } from 'react-i18next'
import { QUERY_TASK, QUERY_USERNAME } from 'utils/constants';
import { useSidebar } from 'hooks';

const Index = () => {
  const { t } = useTranslation();
  const { handleShowSidebar, SIDEBAR_OPTIONS } = useSidebar();

  useEffect(() => {
    (QUERY_TASK) && handleShowSidebar(SIDEBAR_OPTIONS.task);
    (QUERY_USERNAME) && handleShowSidebar(SIDEBAR_OPTIONS.userProfile);
    // eslint-disable-next-line
  }, []);

  return (
    <Fullwidth>
      {t("test")}
    </Fullwidth>
  )
}

export default Index
