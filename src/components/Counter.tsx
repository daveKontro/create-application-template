import '../styles/counter.css'
import { FC, useState } from 'react'

// NOTE update count then edit App.tsx... thanks
// to ReactRefreshWebpackPlugin state is preserved

type Count = number

export const Counter: FC = (): JSX.Element => {
  const [count, setCount] = useState<Count>(0)

  const handleClickCounter = () => setCount((count: Count) => ++count)

  return (
    <div>
      <button id='counter' onClick={handleClickCounter}>
        count:&nbsp;{count}
      </button>
    </div>
  )
}
