import React, { ChangeEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { InputComponent, InputText } from '@/common/components/forms'
import { CrossIcon, SearchIcon } from '@/common/components/icons'
import { Colors } from '@/common/constants'

import { ButtonLink } from '../../buttons'
import { ControlProps } from '../types'

import { FilterLabel } from './FilterLabel'

interface FilterSearchBoxProps extends SearchBoxProps {
  slot: React.RefObject<HTMLDivElement>
  label?: string
  displayReset?: boolean
}
export const FilterSearchBox = React.memo(
  ({ value, slot, onApply, onChange, label, displayReset }: FilterSearchBoxProps) => {
    // Force the search box to render (sometime the ref is null on the first render)
    const [rendered, setRendered] = useState(!!slot.current)
    useEffect(() => {
      !rendered && setRendered(true)
    }, [])

    return (
      slot.current &&
      createPortal(
        <SearchBox value={value} onApply={onApply} onChange={onChange} label={label} displayReset={displayReset} />,
        slot.current
      )
    )
  }
)

interface SearchBoxProps extends ControlProps<string> {
  onApply?: () => void
  label?: string
  displayReset?: boolean
}
export const SearchBox = React.memo(({ value, onApply, onChange, label, displayReset }: SearchBoxProps) => {
  const change = onChange && (({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.value))
  const keyDown = onApply && (({ key }: React.KeyboardEvent) => key === 'Enter' && onApply())
  const reset =
    onChange &&
    onApply &&
    (() => {
      onChange('')
      onApply()
    })
  return (
    <SearchBoxWrapper>
      <FilterLabel>{label}</FilterLabel>
      <SearchInput inputSize={label ? 'xs' : 's'}>
        <InputText placeholder="Search" value={value} onChange={change} onKeyDown={keyDown} />
        {displayReset && value && (
          <ClearButton onClick={reset} size="small" borderless>
            <CrossIcon />
          </ClearButton>
        )}
      </SearchInput>
    </SearchBoxWrapper>
  )
})

const SearchBoxWrapper = styled.div`
  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    ${FilterLabel} {
      color: ${Colors.Blue[400]};
    }
  }
`

const SearchInput = styled(InputComponent).attrs({
  icon: <SearchIcon />,
  tight: true,
  inputWidth: 'xs',
})`
  width: 100%;
  & + div {
    border: 1px solid ${Colors.Black[200]};
  }
`

const ClearButton = styled(ButtonLink)`
  line-height: 16px;
  margin-right: 8px;

  &:before {
    display: none;
  }
`
