import styled from 'styled-components'

import data from '../../data'

export const HeaderStyled = styled.header`
  align-items: center;
  background-image:  url(${data.headerBk});
  background-position: center;
  background-size: cover;
  display: flex;
  font-family: cursive;
  height: 100vh;
  justify-content: space-between;
  text-align: center;
  width: 30vw;

  @media screen and (max-width: 980px) {
    height: 400px;
    width: 100vw;
  }

  img {
    border-radius: 100%;
    border: 0;
    display: block;
    margin: 0 0 1em;
    width: 6.25em;
  }
`

export const ListIcon = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;

  li {
    padding: 0 1em 0 0;

    i {
      font-size: 30px;
      color: black;

      @media screen and (max-width: 980px) {
        color: white;
      }
    }
  }
`

HeaderStyled.displayName = 'HeaderStyled'
ListIcon.displayName = 'ListIcon'
