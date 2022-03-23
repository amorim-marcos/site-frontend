/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect, useRef, useState } from 'react'

import { IContactChannel } from 'types/data/ContactChannel'

export interface IUsecontactChannels {
  isMobile: boolean
  ref: RefObject<HTMLDivElement>
  onRender: (props: { w: number; h: number }) => void
  bgArray: { x: number; y: number }[]
}

export interface useContactChannelsProps {
  currentWidth?: number
  contact_channels: IContactChannel[]
}

export function useContactChannels(props: useContactChannelsProps) {
  const channelsParentRef = useRef<HTMLDivElement>(null)
  const [channelsParentWidth, setWidth] = useState<number>(0)

  const [bgArray, setBgArray] = useState<any>([])
  const [finalBgArray, setFinalBgArray] = useState<any>([])

  const onRender = (props: { w: number; h: number }) => {
    setBgArray((prev: any) => [
      ...prev,
      { width: props.w, height: props.h, x: 0, y: 0 }
    ])
  }

  useEffect(() => {
    const currChannelsParentRef = channelsParentRef?.current

    if (currChannelsParentRef && currChannelsParentRef.clientWidth)
      setWidth(currChannelsParentRef.clientWidth)
  }, [props.currentWidth])

  useEffect(() => {
    if (Object.keys(bgArray).length == props.contact_channels.length) {
      // Define know values
      const imgW = 1922
      const originalFlexWidth = channelsParentWidth

      // Now it is fixed values. We should work on resposivity of that values getting for better results.
      const padding = 200
      const flexWidth = channelsParentWidth - padding
      const buttonsH = 58
      const spaceSize = 15
      const marginSize = 20

      const bgArrayCopy = [...bgArray]

      // Discover and organize the lines of tabs
      const lines: any[] = []
      let currentLineWidth = 0
      let currentLineArray: any[] = []

      bgArray.forEach((bg: any, i: string) => {
        if (currentLineWidth + bg.width + marginSize >= flexWidth) {
          currentLineWidth = bg.width + marginSize
          currentLineArray = []
          lines.push(currentLineArray)
        } else {
          currentLineWidth = currentLineWidth + bg.width + marginSize
        }

        currentLineArray.push(i)
      })

      let visitedItems = 0

      // Calculate all tabs positioning x and y iteraring over all lines previously organized.
      for (const line in lines) {
        const currentLine = lines[line]

        // Calculate line box dimensions.
        let lineBoxWidth = 0

        for (let i = visitedItems; i < visitedItems + currentLine.length; i++) {
          lineBoxWidth = lineBoxWidth + bgArrayCopy[i].width + marginSize
        }

        // Set up dimensions and limits where tabs will use background.
        const originalImgX = Math.floor((imgW - originalFlexWidth) / 2) // discover original bg image borders relating to flex width.
        let currentX =
          originalImgX + Math.floor((originalFlexWidth - lineBoxWidth) / 2) // horizontal positioning
        const currentY = parseInt(line) * (buttonsH + spaceSize) // vertical positioning

        // Iterate over current line to set up bg positions.
        for (let i = visitedItems; i < visitedItems + currentLine.length; i++) {
          bgArrayCopy[i].x = currentX
          bgArrayCopy[i].y = currentY
          currentX = currentX + bgArrayCopy[i].width + marginSize
        }

        visitedItems = visitedItems + currentLine.length
      }

      setFinalBgArray({ ...bgArrayCopy })
    }
  }, [bgArray, channelsParentWidth, props.contact_channels.length])

  return {
    bgArray: finalBgArray,
    ref: channelsParentRef,
    onRender
  }
}
