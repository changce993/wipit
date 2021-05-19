import React from 'react';
import { Fullwidth } from '../../components/Template';
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation();
  return (
    <Fullwidth>
      {t("test")}
    </Fullwidth>
  )
}

export default Index
