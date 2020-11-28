import React from 'react'
import logo from '../../Mediamarket.svg'
import styled from 'styled-components'
import MdMore from 'react-ionicons/lib/MdMore'

import { Link } from 'react-router-dom'
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'

import Button from '../reset/Button'
import Input from '../reset/Input'

const Container = styled.div`
  padding: 38px 75px 51px;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

// todo change name
const ShopByCategory = styled(Button)`
  ${'' /* display: block; */}
  border-radius: 4px;
  background-color: #007aff;
  flex-basis: 370px;
  flex-grow: 0;

  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  text-align: left;

  margin-right: 31px;
  ${'' /* padding: 26px 0 29px 30px; */}
  padding: 0 30px;

  justify-content: space-between;
  align-items: center;
  & > svg {
    width: 32px;
    height: 32px;
    fill: #fff;
  }
`

const SearchBar = styled.div`
  background-color: #386;
  border: 2px solid #007aff;
  border-radius: 4px;

  display: flex;
  align-items: stretch;
  flex-grow: 1;
`

const SearchInput = styled(Input)`
  border: 0;
  border-radius: 0;
  line-height: 66px;
  padding: 24px 0 25px 22px;
  height: 75px;

  font-family: 'Poppins', sans-serif;
  font-size: 20px;
`

const SelectSearchCategory = styled(Button)`
  font-family: Poppins;
  font-size: 20px;
  position: relative;

  & > svg {
    position: absolute;
  }

  & > .arrow-up {
    right: 0;
  }

  & > .arrow-down {
    right: 0;
  }
`

export default () => {
  return (
    <Container>
      <ShopByCategory value="shop-by-category">
        shop by category
        <MdArrowDropdown />
      </ShopByCategory>
      <SearchBar>
        <SearchInput type="search" placeholder="Search for products..." />
        <SelectSearchCategory>
          All Categories
          <MdArrowDropdown className="arrow-up" />
          <MdArrowDropup className="arrow-down" />
        </SelectSearchCategory>
      </SearchBar>
    </Container>
  )
}
