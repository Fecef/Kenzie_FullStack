import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }

  :where(ol, ul) {
    margin: 80px 0px 0px;
    padding: 0;
  }

  a {
    color: #868e9680;
    font-size: 20px;
    &.pagination-active {
      color: #868e96;
      font-family: "Lexend";
    }
  }
  a button {
    font-family: "Lexend";
  }
`;
