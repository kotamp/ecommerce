import styled from 'styled-components'

/* https://moderncss.dev/css-button-styling-guide/ */
export default styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${
    '' /* background-color: $btnColor;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18); */
  }

  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;

  text-align: center;
  line-height: 1.1;

  ${'' /* transition: 220ms all ease-in-out; */}
`
