import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import Trans from '../../../Atoms/Trans'
import { Columns } from 'styled-icons/boxicons-regular/Columns'
import ColumnGroup from './ColumnGroup'

import Typo from '../../../Atoms/Typo'

const ColumnsIcon = styled(Columns)`
  ${css({ mr: 'm' })}
`

const Container = styled.div`
  width: 270px;
  ${css({ px: 'xl' })}
`

const Title = styled(Typo)`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${css({ mb: 'm' })};
`

const EditColumns = ({
  descriptionText = <Trans transKey="global.editColumns.description"/>,
  columns,
  onChange = () => {},
  ...props
}) => {
  const enabledColumns = columns.filter(({ show }) => show)
  const disabledColumns = columns.filter(({ show }) => !show)

  return <Container>
    <Title as="h2" fontSize="l" color="primary">
      <ColumnsIcon size={24} />
      <Trans transKey="global.editColumns.title" />
    </Title>
    <Typo>{descriptionText}</Typo>
    {enabledColumns.length > 0 &&
      <ColumnGroup
        label={<Trans transKey="global.editColumns.enabledColumns"/>}
        columns={enabledColumns}
        onChange={onChange}
        checked={true}
      />
    }
    {disabledColumns.length > 0 &&
      <ColumnGroup
        label={<Trans transKey="global.editColumns.enabledColumns"/>}
        columns={disabledColumns}
        onChange={onChange}
        checked={false}
      />
    }
  </Container>
}
export default EditColumns