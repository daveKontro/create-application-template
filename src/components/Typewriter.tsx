import {
  useState,
  useEffect,
  FC,
  ReactElement,
  PropsWithChildren,
} from 'react'

export const Typewriter: FC<
  PropsWithChildren<{
    text:string,
    speed:number,
    delay?:number,
    children?:ReactElement,
  }>
> = ({
  text,
  speed,
  delay = 0,
  children,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const mySpeed = (currentIndex === 0) ? delay + speed : speed

    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text.charAt(currentIndex))
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, mySpeed)

      return () => clearTimeout(timeoutId)
    }
  }, [
    currentIndex,
    text,
    speed,
    delay,
  ])

  return (
    <>
      {displayedText}
      {
        (currentIndex === text.length && children) &&
          <>&nbsp;{children}</>
      }
    </>
  )
}
