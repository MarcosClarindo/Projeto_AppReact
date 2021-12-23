import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import useStyles from './Header.style';

// JSS



const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
      handleToggleMenu() // método para fechar o menu após a página abrir
      history.push(route)
    }

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleToggleMenu()}
              
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
          <List> 
            <ListItem button onClick={() => handleMenuClick('/')}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick('/customers')}>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText>Cadastro de Clientes</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
}

export default Header