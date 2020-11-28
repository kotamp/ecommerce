import React from 'react'
import logo from '../../Mediamarket.svg'
import styled from 'styled-components'
import MdMore from 'react-ionicons/lib/MdMore'
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 38px 75px 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  background-color: #0007;
  min-width: 300px;
  height: 26px;
  margin-right: 87px;
`

const SiteMenu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin-right: 49px;
  }
`

const SiteLink = styled(Link)`
  color: #000;
  display: block;
  /* font specific*/
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;

  &:hover {
    color: #007aff;
  }

  &:hover > svg {
    fill: #007aff;
  }

  ${({ special }) => (special ? 'color: #ff3b30;' : '')}
`

const arrowDownStyles = {}

const ArrowDown = styled(IosArrowDown)`
  ${'' /* position: absolute; */}

  margin-left: 2px;
  width: 32px;
  height: 32px;
`

const CategoryHeader = () => {
  return (
    <Container>
      <Logo alt="logo" width="213" height="26" />
      <SiteMenu>
        <SiteLink>
          Home
          <ArrowDown />
        </SiteLink>
        <SiteLink>
          Shop
          <ArrowDown />
        </SiteLink>
        <SiteLink>
          Blog
          <ArrowDown />
        </SiteLink>
        <SiteLink>
          Pages
          <ArrowDown />
        </SiteLink>
        <SiteLink>Products</SiteLink>
        <SiteLink>Brands</SiteLink>
        <SiteLink special>Today's Deals</SiteLink>
        <SiteLink>New Arrivals</SiteLink>
        <SiteLink>Gift Cards</SiteLink>
        <SiteLink>
          <MdMore color="#007aff" fontSize="42px" />
        </SiteLink>
      </SiteMenu>
    </Container>
  )
}

export default CategoryHeader
