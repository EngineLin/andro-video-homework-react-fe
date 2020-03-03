import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  padding: 10px;
  box-sizing: content-box;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
  margin: 8px;
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContextWrapper = styled.div`
  width: calc(100% - 200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const Name = styled.input`
  width: calc(85% - 30px);
  margin: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px; 
  ${props => props.disabled ? 'border: 0;' : ''};
  
  &:focus {
    ${props => props.disabled ? 'outline: 0;' : ''};
  }
`

export const Price = styled.input`
  width: calc(15% - 10px);
  margin: 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;  
  font-weight: 700;
  ${props => props.disabled ? 'border: 0;' : ''};
  
  &:focus {
    ${props => props.disabled ? 'outline: 0;' : ''};
  }
`

export const NoteLabel = styled.p`
  font-size: 16px;
  margin: 5px 0;
`

export const Note = styled.textarea`
  margin: 5px 0;
  font-size: 14px;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  ${props => props.disabled ? 'border: 0;' : ''};
  
  &:focus {
    ${props => props.disabled ? 'outline: 0;' : ''};
  }
`
