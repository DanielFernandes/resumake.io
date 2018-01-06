/**
 * @flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../theme'

const Text = styled.h1`
  font-family: 'Nexa';
  font-size: ${props => (props.big ? 3.5 : 2.5)}em;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-transform: lowercase;
  text-decoration: none;
  color: white;
`

const Accent = styled.em`
  font-style: normal;
  color: ${colors.primary};
`

type Props = {
  big?: boolean
}

function Logo({ big }: Props) {
  return (
    <Text big={big}>
      <StyledLink to="/">
        resu<Accent>make</Accent>
      </StyledLink>
    </Text>
  )
}

export default Logo