import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  height: calc(100vh - 144px);
  max-width: 1440px;
  margin: 0 auto;
`;

export const Section = styled.section`
  box-shadow: ${props => props.theme.shadow[1]};
  border-radius: ${props => props.theme.rounded.sm};
  overflow-y: scroll;
  height: 100%;
`;

export const Title = styled.h2`
  position: sticky;
  background-color: ${props => props.theme.colors.white};
  top: 0;
  color: ${props => props.theme.colors.lightBlack};
  font-size: ${props => props.theme.fontSize.subtitle};
  font-family: ${props => props.theme.fontFamily.primary};
  font-weight: ${props => props.theme.fontWeight.semibold};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;

export const Tasks = styled.p`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${props => props.theme.fontSize.text};
  border-radius: ${props => props.theme.rounded.circle};
  background-color: ${props => props.theme.colors.primary};
  cursor: default;
`;
