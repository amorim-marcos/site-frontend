import { Container, Flex, Image, Text, Box, Button} from "@chakra-ui/react"
import CompletedTitle from "@components/CompletedTitle"
import ContactChannelForm from "@components/ContactChannelForm"
import ContactChannelSelectButton from "@components/ContactChannelForm/ContactChannelSelectButton"
import { EarthIcon, BagIcon, BadgeIcon } from "@components/Icons"
import Pagebar from "@components/Pagebar"
import PatternInfo from "@components/PatternInfo"
import useMobile from "hooks/useMobile"
import React from "react"

export type ContactChannelData = {
  name: string,
  description: string,
  image: string,
  service_code: string,
  attention_required?: boolean
}

export type ContactViewProps = {
  contact_channels: Array<ContactChannelData>
}

export const Contact = ({ contact_channels }:ContactViewProps) => {
  const [contact_channel, setContactChannel] = React.useState<ContactChannelData | null>(null)
  const { isMobile } = useMobile(1024)
  const [showAllAreas, setShowAllAreas] = React.useState<Boolean>(true)
  const channelsParentRef = React.useRef(null)
  const [channelsParentHeight, setHeight] = React.useState<number>(0)
  const [channelsParentWidth, setWidth] = React.useState<number>(0)

  const [bgArray, setBgArray] = React.useState<any>({})
  const [finalBgArray, setFinalBgArray] = React.useState<any>({})

  React.useEffect(() => {
    // @ts-ignore
    let h = channelsParentRef.current.clientHeight
    // @ts-ignore
    let w = channelsParentRef.current.clientWidth

    if(w && h){
      setHeight(w)
      setWidth(h)
    }
  })

  React.useEffect(() => {
    if(Object.keys(bgArray).length == contact_channels.length){
        // Define know values
        const imgW:number = 1922
        const originalFlexWidth = channelsParentWidth

        // Now it is fixed values. We should work on resposivity of that values getting for better results.
        const padding = 200
        const flexWidth:number = channelsParentWidth - padding 
        const buttonsH:number = 58
        const spaceSize:number = 15
        const marginSize:number = 20

        console.log(imgW, originalFlexWidth, channelsParentWidth)
        
        const bgArrayCopy = {...bgArray}

        // Discover and organize the lines of tabs
        let lines = []
        var currentLineWidth = 0
        var currentLineArray:Array<any> = []
        lines.push(currentLineArray)

        for(let i=0; i<Object.keys(bgArray).length; i++){ 
          // If the current tab has a size greater than available space, then pass to next line.
          if( currentLineWidth + bgArrayCopy[i.toString()]["width"] + marginSize >= flexWidth){
            currentLineWidth = bgArrayCopy[i.toString()]["width"] + marginSize
            currentLineArray = []
            lines.push(currentLineArray)
          }else{
            currentLineWidth = currentLineWidth + bgArrayCopy[i.toString()]["width"] + marginSize
          }

          currentLineArray.push(i)
        }

        let visitedItems = 0

        // Calculate all tabs positioning x and y iteraring over all lines previously organized. 
        for(let line in lines){
          let currentLine = lines[line]

          // Calculate line box dimensions. 
          let lineBoxWidth = 0
          
          for(let i = visitedItems; i < visitedItems + currentLine.length; i++){
              lineBoxWidth = lineBoxWidth + bgArrayCopy[i.toString()]["width"] + marginSize
          }

          // Set up dimensions and limits where tabs will use background.
          const originalImgX = Math.floor((imgW - originalFlexWidth) / 2) // discover original bg image borders relating to flex width.
          var currentX = originalImgX + Math.floor((originalFlexWidth - lineBoxWidth) / 2) // horizontal positioning
          var currentY = parseInt(line)*(buttonsH + spaceSize) // vertical positioning

          // Iterate over current line to set up bg positions. 
          for(let i = visitedItems; i < visitedItems + currentLine.length; i++){
            bgArrayCopy[i.toString()]["x"] = currentX 
            bgArrayCopy[i.toString()]["y"] = currentY
            currentX = currentX + bgArrayCopy[i.toString()]["width"] + marginSize
          }

          visitedItems = visitedItems + currentLine.length
        }

        setFinalBgArray({...bgArrayCopy})
    }
  }, [bgArray])


  return (
    <>
      <Pagebar 
        paths={[
          {
              title: 'Fale Conosco',
              url: 'contact'
          }
        ]}
      />
      <Container backgroundColor="brown.100" maxW="1920px" paddingInline="0" paddingTop="30px">
        <Flex justifyContent="center">
          <CompletedTitle 
            titleString="Sobre o que você deseja falar?"
            textAlign="center"
          />
        </Flex>
        <Flex flexDirection="column" mt="55px" justifyContent="center" paddingBottom={{base: "40px", lg: "80px"}} ref={channelsParentRef}>
          {
            (isMobile && !showAllAreas)
            ? 
              (
                <ContactChannelSelectButton 
                  alignSelf="center"
                  isActive={(contact_channel != null) ? true : false} 
                  onClick={(isActive) => { if(!isActive){ setContactChannel((contact_channel != null) ? contact_channel : contact_channels[0]); setShowAllAreas(false); } else{setContactChannel(null); setShowAllAreas(true)}}}
                  mr="20px" mb="15px" 
                  name={(contact_channel != null) ? contact_channel.name : contact_channels[0].name}  service_code={(contact_channel != null) ? contact_channel.service_code : contact_channels[0].service_code} 
                  attention_required={(contact_channel != null && contact_channel.attention_required) ? true : false}
                />
              )
            : (
              <Flex
                wrap="wrap"
                paddingLeft="100px"
                paddingRight="100px"
                justifyContent="center"
                alignItems="center"
              >
                {
                  contact_channels.map(
                    (channel, index) => 
                      <ContactChannelSelectButton 
                        onFinishRender={
                          function(width, height){ 
                            bgArray[index.toString()] = { width, height, x: 0, y: 0};
                            setBgArray({...bgArray})
                          }
                        }
                        isActive={(contact_channel != null && contact_channel.service_code == channel.service_code) ? true : false} 
                        onClick={(isActive) => { if(!isActive){ setContactChannel(channel); setShowAllAreas(false)} else{setContactChannel(null); setShowAllAreas(true)}}} 
                        mr="20px" mb="15px" 
                        name={channel.name}  service_code={channel.service_code} attention_required={(channel.attention_required) ? true : false}
                        bgX={(finalBgArray[index.toString()] && finalBgArray[index.toString()].x) ? finalBgArray[index].x : 0}
                        bgY={(finalBgArray[index.toString()] && finalBgArray[index.toString()].y) ? finalBgArray[index].y : 0}
                      />)
                }
              </Flex>
            )          

          }
          {
            isMobile &&           
            <Flex mt="20px" justifyContent="center">
              <Button onClick={() => { setShowAllAreas(!showAllAreas) }} variant="link">{(showAllAreas) ? "esconder áreas" : "ver todas as áreas"}</Button>
            </Flex>
          }

        </Flex>
        { 
        contact_channel && 
        <Flex justifyContent="center" backgroundColor="white.100" minH="500px" paddingTop={{ base: "40px", lg:"80px"}} paddingBottom="60px">
            <Flex justifyContent="space-around" flexDirection={{ base: "column", lg: "row"}} paddingLeft={ { base: "40px", lg: "120px" }} paddingRight={ { base: "40px", lg: "120px" } }>
              <Flex flex="1" justifyContent="flex-start" direction="column">
                <Text as="h3" variant={"h3" as any} order="1">{contact_channel.name}</Text>
                <Text mt={{ base: "10px", lg: "40px"}} fontFamily='body'  variant={"body" as any} order={{ base: "3", lg: "2"}}>{contact_channel.description}</Text>
                <Image mt={{ base: "10px", lg: "30px"}} src={contact_channel.image} order={{ base: "2", lg: "3"}} />
              </Flex>
              <Flex flex="2">
                <ContactChannelForm channel_name={contact_channel.name} service_code={contact_channel.service_code} paddingLeft={{ base:0, lg:"80px"}} paddingRight={{ base:0, lg: "10px", xl: "30px"}}/>
              </Flex>
            </Flex>
        </Flex>        
        }
        <Flex backgroundColor="green.400" paddingTop={{base: "50px", lg:"100px"}} paddingBottom={{base: "50px", lg:"100px"}}>
          <Flex width="full" flexDirection={{base: "column", lg: "row"}} paddingLeft={{base: 0, lg: "80px"}} paddingRight={{base: 0, lg: "80px"}}>
            <Box flex="1" mr={{base: 0, lg: "45px"}}>
              <PatternInfo
                  title="DESCUBRA"
                  description="Onde Comprar"
                  onClick={() => alert('Vai para Onde Comprar')}
                  icon={
                    <EarthIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
            <Box flex="1" mr={{base: 0, lg: "45px"}} mt={{ base: "45px", lg: 0}}>
              <PatternInfo
                  title="Solicite Nosso"
                  description="Mostruário"
                  onClick={() => alert('Vai para Solicitar Mostruário')}
                  icon={
                    <BagIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
            <Box flex="1" mt={{ base: "45px", lg: 0}}>
              <PatternInfo
                  title="Confira Nossas"
                  description="Vagas abertas"
                  onClick={() => alert('Vai para Onde Comprar')}
                  icon={
                    <BadgeIcon
                      width={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                      height={{ base: '30px', xs: '30px', sm: '58px', lg: '70px', xl: '80px' }}
                    />
                  }
                />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
