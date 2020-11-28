import styled from 'styled-components'

export default styled.input`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #8b8a8b;
  border-radius: 4px;
  line-height: 1;
  height: 2.25rem;

  &[readonly] {
    border-style: dotted;
    cursor: not-allowed;
    color: #777;
  }

  &[disabled] {
    border-color: #ccc;

    background-color: #eee;
    cursor: not-allowed;
  }
`
