import React, { useState } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { StoreOrder } from '../../api/forms/TodoListForms';
import { DELETE_ORDER, EDIT_ORDER } from '../../store/orders'

import {
    Container,
    ContextWrapper,
    Name,
    Price,
    FlexDiv,
    NoteLabel,
    Note
} from './styled'

export default (props) => {
    const { id, name, price, note } = props
    const [nameState, setName] = useState(name)
    const [priceState, setPrice] = useState(price)
    const [noteState, setNote] = useState(note)
    const [isEditable, setIsEditable] = useState(false)

    const dispatch = useDispatch()
    const onEdit = order => dispatch({
        type: EDIT_ORDER,
        payload: { order }
    })
    const onDelete = id => dispatch({
        type: DELETE_ORDER,
        payload: { id }
    })

    const onNameChange = e => void setName(e.target.value)
    const onPriceChange = e => void setPrice(e.target.value)
    const onNoteChange = e => void setNote(e.target.value)
    const onEditClick = () => {
        if (isEditable) {
            const order = StoreOrder.create({
                id,
                name: nameState,
                price: priceState,
                note: noteState
            })
            onEdit(order)
            setIsEditable(false)
        } else {
            setIsEditable(true)
        }
    }

    return (
      <Container>
          <FlexDiv>
              <ContextWrapper>
                  <Tooltip title={nameState} arrow>
                      <Name
                        value={nameState}
                        type="text"
                        onChange={onNameChange}
                        disabled={!isEditable}
                      />
                  </Tooltip>
                  <Tooltip title={priceState} arrow>
                      <Price
                        value={priceState}
                        type="number"
                        onChange={onPriceChange}
                        disabled={!isEditable}
                      />
                  </Tooltip>
              </ContextWrapper>

              <ButtonGroup size="medium">
                  <Button
                    variant="contained"
                    color={isEditable ? 'secondary' : 'primary'}
                    startIcon={<EditIcon />}
                    onClick={onEditClick}
                  >
                      { isEditable ? 'Done' : 'Edit' }
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    endIcon={<DeleteIcon />}
                    onClick={() => onDelete(id)}
                  >
                      Delete
                  </Button>
              </ButtonGroup>
          </FlexDiv>

          <NoteLabel>Note</NoteLabel>
          <Note value={noteState} onChange={onNoteChange} disabled={!isEditable} />
      </Container>
    );
}
