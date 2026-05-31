import styled from '@emotion/styled'

export const StyledText = styled.div<{
  $minHeightRem: number,
}>`
  min-height: ${({ $minHeightRem }) => (
    `${$minHeightRem}rem`
  )};
`
