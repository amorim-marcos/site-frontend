import { Box, Image} from "@chakra-ui/react"

export type BpPatternImageProps = {
  image_url?: string
}
export const BpPatternImage = ({ image_url, ...props }: BpPatternImageProps) => {
  return (
    <Box zIndex="1" padding="0" margin="0" backgroundImage={`url(${image_url})`} backgroundRepeat="repeat" backgroundSize="cover" {...props}>
      <Image visibility="hidden" src="/bps/support_masks/mask.jpg" zIndex="-1" />
    </Box>
  )
}
