import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  border-radius: 15px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
  box-sizing: border-box;
`

export const Header = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  box-sizing: border-box;
  
  h1 {
    font-size: 26px;
    font-weight: 600;
    margin-right: 100px;
  }
`

export const OrdersWrapper = styled.div`
  padding: 15px 0;
  background: #e7e7e7;
`

export const AddButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, .3);
  box-sizing: border-box;
`

