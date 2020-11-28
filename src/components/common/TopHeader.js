import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 75px;
  background-color: #f3f3f3;
  ${'' /* background-color: #386; */}
  padding: 27px 75px 33px;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  & > div {
    display: flex;
    align-items: baseline;
  }
`

const Select = styled.select`
  color: #000;
  opacity: 0.7;

  line-height: 27px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  ${'' /* background-color: #fce; */}
  padding-right: 10px;
`

const SLink = styled(Link)`
  color: #000;
  opacity: 0.7;
  ${'' /* background-color: #0005; */}
  display: block;
  line-height: 27px;

  text-decoration: none;
  ${'' /* color: #0007; */}

  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  margin-right: 14px;
  &:last-child {
    margin-right: 0px;
  }
`

const TopHeader = () => {
  return (
    <Container>
      <div>
        <Select value="EN" id="launguage-select">
          <option value="EN">EN</option>
          <option value="UK">UK</option>
          <option value="ES">ES</option>
        </Select>
        <label for="launguage-select">
          <MdArrowDropdown color="#0007" />
        </label>
        <Select value="USD">
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="GBP">GBP</option>
        </Select>
      </div>
      <div>
        <SLink>FAQ</SLink>
        <SLink>Contact</SLink>
        <SLink>Order Status</SLink>
        <SLink>My Account</SLink>
      </div>
    </Container>
  )
}

// const TopHeader = () => <Container>hello</Container>

export default TopHeader
