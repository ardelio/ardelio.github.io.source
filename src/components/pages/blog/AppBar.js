import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

import { FEATURES, HOME } from '../../../constants'

export default function AppBar({ pageName, pageUrl }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        elevation={0}
        position="static"
        sx={theme => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
        })}
      >
        <Toolbar>
          <Button
            href={HOME.url}
            variant="outlined"
            sx={{
              border: '2px solid',
              '&:hover': {
                border: '2px solid',
              },
            }}
          >
            <Typography>Ardelio</Typography>
          </Button>
          <Typography ml={8} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            id="app-bar-menu-button"
            aria-controls={open ? 'app-bar-menu' : undefined}
            aria-haspopup="true"
            aria-label="menu"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="app-bar-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'app-bar-menu-button',
            }}
          >
            {[HOME]
              .concat(
                Object.keys(FEATURES)
                  .map(key => FEATURES[key])
                  .filter(feature => feature.url !== pageUrl)
              )
              .map(feature => {
                return (
                  <MenuItem key={feature.name} onClick={handleClose}>
                    <Link href={feature.url} underline="none">
                      <Typography>{feature.name}</Typography>
                    </Link>
                  </MenuItem>
                )
              })}
          </Menu>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}

AppBar.propTypes = {
  pageName: PropTypes.string,
  pageUrl: PropTypes.string,
}
