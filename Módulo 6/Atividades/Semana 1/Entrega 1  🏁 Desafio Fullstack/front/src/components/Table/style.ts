import styled from "styled-components";

export const Box = styled.table`
    margin-top: 4rem;
    width: 100%;
 
    caption {
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    thead {

        th {
            padding: 10px 0;
            color: #fff;
            border-bottom: 1px solid #fff;
        }
    }

    tbody {

        td {
            padding: 5px 0;
            text-align: center;
        }

    }

    .icon {
        font-size: 2rem;
        cursor: pointer;
    }
`