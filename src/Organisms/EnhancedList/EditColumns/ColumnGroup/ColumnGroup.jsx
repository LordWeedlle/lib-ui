import React from 'react'

import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import { ListItemIcon, ListItemText, ListSubheader, ListItem } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'

const ColumnGroup = ({ label, columns, onChange = () => {}, checked }) =>
  <List
    dense={true}
    subheader={<ListSubheader disableSticky={true}>{label}</ListSubheader>}
  >
    {columns.map(({ name, translationKey, description, show }) =>
      <ListItem button key={name} onClick={() => onChange(name)}>
        <ListItemIcon>
          <Checkbox checked={checked} color="default" />
        </ListItemIcon>
        <ListItemText id={name} primary={translationKey} secondary={description} />
        <ListItemSecondaryAction />
      </ListItem>,
    )}
  </List>

export default ColumnGroup
