import React, { Component } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Tooltip,
  TableSortLabel
} from '@material-ui/core'

export default class extends Component {
  render () {
    const {
      onSelectAll,
      order,
      orderBy,
      numSelected,
      rowCount,
      tableHeaders,
      selectable,
      allSelected
    } = this.props

    return (
      <TableHead>
        <TableRow>
          {selectable &&
            <TableCell padding='checkbox'>
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={(numSelected === rowCount) || allSelected}
                onChange={onSelectAll()} />
            </TableCell>
          }
          {tableHeaders.map((header, key) => {
            return header !== 'dataTableId' &&
              <TableCell
                numeric={header.numeric}
                key={key}
                sortDirection={orderBy === header ? order : false}>
                <Tooltip
                  title='Sort'
                  placement='bottom-start'
                  enterDelay={200}>
                  <TableSortLabel
                    active={orderBy === header}
                    direction={order}
                    onClick={this.createSortHandler(header)}>
                    {header.value}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
          }, this)}
        </TableRow>
      </TableHead>
    )
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }
}
