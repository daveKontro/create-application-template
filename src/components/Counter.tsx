import { FC, useState } from 'react'
import * as styledCount from '../styles/Counter.styled'
import type { Count } from '../types'

// NOTE update count then edit App.tsx... thanks
// to ReactRefreshWebpackPlugin state is preserved

const Counter: FC = () => {
  const [count, setCount] = useState<Count>(0)

  const handleClickCounter = () => setCount((count: Count) => ++count)

  return (
    <div>
      <styledCount.StyledCounter onClick={handleClickCounter}>
        <>count:&nbsp;</>
        <styledCount.StyledCount
          data-testid={'count'}
        >
          {count}
        </styledCount.StyledCount>
      </styledCount.StyledCounter>
    </div>
  )
}

export default Counter
