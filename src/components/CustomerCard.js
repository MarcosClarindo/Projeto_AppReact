import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mui/material';

import ModalConfirm from './ModalConfirm';


const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
}) => {

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    alert('ok')
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src ={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon/>
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal />
      <ModalConfirm 
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={handleConfirmModal}
        title= "Deseja realmente excluir este cadastro?"
        message= "Ao confirmar não será possível reverter esta operação."
      />
    </>
  )

}

export default CustomerCard
