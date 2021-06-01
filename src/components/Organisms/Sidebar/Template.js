import { useContext } from 'react';
import { Button, Div, Input, Link } from 'components/Atoms';
import Title from './Title';
import TaskAction from './TaskAction';
import { Body } from './styled';
import sidebarContext from 'context/sidebar/sidebarContext';

const Template = ({ title, handleBack, cta, secondaryButton, isChat, user, children, ...props }) => {
  const { SIDEBAR_OPTIONS, content } = useContext(sidebarContext);

  return (
    <>
      <Title title={title} handleBack={handleBack}/>
      <Body bg="primary" {...props}>
        {children}
      </Body>
      <Div display="flex" flexDirection="column" gridGap="1rem">
        {isChat ? (
          <>
            <Input placeholder="write a messate"/>
            <TaskAction/>
          </>
        ) : (
          !user && SIDEBAR_OPTIONS.task === content ? null : (
            <>
              {cta && <Button onClick={cta.handler} width="100%">{cta.value}</Button>}
              {secondaryButton && (
                <Link
                  display="block" width="fit-content" margin="0 auto"
                  to={secondaryButton?.to}
                  href={secondaryButton?.href}
                  as={secondaryButton?.as}
                  onClick={secondaryButton?.handler}
                >
                  {secondaryButton.value}
                </Link>
              )}
            </>
          )
        )}
      </Div>
    </>
  )
}

export default Template
