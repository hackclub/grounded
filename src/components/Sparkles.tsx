// https://github.com/hackclub/site/blob/main/components/sparkles/index.js
// Full credit to https://joshwcomeau.com/react/animated-sparkles-in-react/
import { useState, ReactNode, FC } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { range, sample, random } from 'lodash'
import { Text } from 'theme-ui'
import theme from '@hackclub/theme'
import useRandomInterval from '@/lib/use-random-interval'
import usePrefersReducedMotion from '@/lib/prefers-reduced-motion'
import { ThemeUICSSObject } from 'theme-ui'

interface SparkleType {
  id: string
  createdAt: number
  color: string
  size: number
  style: {
    top: string
    left: string
  }
}

const generateSparkle = (color: string): SparkleType => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%'
    }
  }
  return sparkle
}

interface SparklesProps {
  colors?: string[]
  children: ReactNode
  sx?: ThemeUICSSObject
}

const Sparkles: FC<SparklesProps & React.ComponentProps<'span'>> = ({
  colors = ['orange', 'yellow', 'green'],
  children,
  sx,
  ...delegated
}) => {
  const allColors = colors.map(
    n => (theme.colors as Record<string, unknown>)[n] as string
  )
  const getColor = () => sample(allColors)
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle(getColor()))
  })
  const prefersReducedMotion = usePrefersReducedMotion()
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(getColor())
      const now = Date.now()
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  )

  return (
    <Wrapper {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper as="strong" sx={sx}>
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

interface SparkleProps {
  size: number
  color: string
  style: React.CSSProperties
}

const Sparkle: FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  )
}

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`
const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 1000ms forwards;
  }
`
const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1250ms linear;
  }
`
const ChildWrapper = styled(Text)`
  position: relative;
  z-index: 1;
  font-weight: bold;
`

export default Sparkles