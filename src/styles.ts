import styled from "styled-components";

export const Row = styled.div<{gap?: number}>`
  display: flex;
  flex-direction: row;
  gap: ${({gap}) => gap || '16'}px;
  margin-top: 16px;
`