import React, { useCallback, useContext, useState } from "react"
import { LookerEmbedSDK, LookerEmbedDashboard } from '@looker/embed-sdk'
import {
  ExtensionContext,
  ExtensionContextData,
} from "@looker/extension-sdk-react"
import styled from "styled-components"
import { LoadingSvg } from "./LoadingSvg"

export function EmbedDashboard ({content, dashboard_next}: any) {
  const [dashboard, setDashboard] = useState<LookerEmbedDashboard>()
  const [loading, setLoading] = useState(true)
  const extensionContext = useContext<ExtensionContextData>(ExtensionContext)


  const canceller = (event: any) => {
    return { cancel: !event.modal }
  }

  const loaded = (event: any) => {
    setTimeout(()=>{setLoading(false)}, 10000)
  }

  const complete = (event: any) => {
    setLoading(false)
  }

  const setupDashboard = (dashboard: LookerEmbedDashboard) => {
    setDashboard(dashboard)
  }

  const embedCtrRef = useCallback(el => {
    const hostUrl = extensionContext?.extensionSDK?.lookerHostData?.hostUrl
    if (el && hostUrl) {
      el.innerHTML = ''
      LookerEmbedSDK.init(hostUrl)
      const db = LookerEmbedSDK.createDashboardWithId(content.dashboard_id)
      if (dashboard_next) {
        db.withNext()
      }
      db.appendTo(el)
        .on('dashboard:loaded', loaded)
        .on('dashboard:run:start', (e: any)=>{console.log(e)})
        .on('dashboard:run:complete', complete)
        // .on('drillmenu:click', canceller)
        // .on('drillmodal:explore', canceller)
        // .on('dashboard:tile:explore', canceller)
        // .on('dashboard:tile:view', canceller)
        .build()
        .connect()
        .then(setupDashboard)
        .catch((error: Error) => {
          console.error('Connection error', error)
        })
    }
  }, [content])


  const style_svg = (loading) ? {} : { display: 'none' }
  const embed_svg = (!loading) ? {} : { display: 'none' }
  return (
    <>
      <div style={style_svg}><LoadingSvg ></LoadingSvg></div>
      <div style={embed_svg}><EmbedContainer  ref={embedCtrRef}/></div>
    </>
  )
}

export const EmbedContainer = styled.div`
  width: 100%;
  height: 95vh;
  & > iframe {
    width: 100%;
    height: 100%;
  }
`