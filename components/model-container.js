import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

// eslint-disable-next-line react/display-name
export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="dog"
    m="auto"
    h={300}
    w={300}
    position="relative"
  >
    {children}
  </Box>
))

const ModelLoader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  )
}

export default ModelLoader