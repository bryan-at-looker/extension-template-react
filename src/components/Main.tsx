import React, { useState, useEffect, useContext } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Code, Tabs, Tab, TabPanel, TabList, TabPanels } from '@looker/components';
import styled from 'styled-components'
import { EmbedDashboard } from './DashboardEmbed';
import { LoadingSvg } from './LoadingSvg';
import { EmbedLook } from './LookEmbed';
import { IconSvg } from './IconSvg';

const PILLPACK_COLOR = '#00A1DF'
const TITLE_SEARCH = 'PillPack E2E'

export function Main() {
  const [contents, setContents] = useState<any>([]);
  const [selected_tab, setSelectedTab] = useState(0)
  const extensionContext = useContext<ExtensionContextData>(ExtensionContext)
  const sdk = extensionContext.coreSDK

  useEffect(() => {
    getContents();
  }, [])

  const getContents = async () => {
    const boards = await sdk.ok(sdk.search_homepages({
      title: TITLE_SEARCH
    }))
    let content: any = []
    if (boards?.length) {
      const board = boards[0] || {}
      if (board && board.homepage_sections) {
        board.homepage_sections.forEach(s=>{
          if (s && s.homepage_items && s.homepage_items.length) {
            s.homepage_items.forEach(hi=>{
              content.push(hi)
            })
          }
        })
      }
    }
    console.log(content)
    setContents(content)
  }

  let tabs = [<></>]
  let tab_panels = [<></>]

  if (contents.length) {
    tabs = contents.map((c: any, i: number)=>{
      const selected_style = (i==selected_tab) ? {borderBottomColor: PILLPACK_COLOR } : {}
      return <Tab style={selected_style} key={c.id}>{c.title}</Tab>
    })
    tab_panels = contents.map((c: any)=>{
      if (c.dashboard_id) {
        return <TabPanel  key={c.id}>
          <EmbedDashboard content={c} dashboard_next={true}></EmbedDashboard>
        </TabPanel>
      } else {
        return <TabPanel  key={c.id}>
          <EmbedLook content={c}></EmbedLook>
        </TabPanel>
      }
      
    })

    return (
      <Tabs 
        onChange={(t)=>{
          setSelectedTab(t)
        }}
      >
        <TabList>
          {tabs}
        </TabList>
        <StyledTabPanels>
          {tab_panels}
        </StyledTabPanels>
      </Tabs>
    );
  } else {
    return <>
      <div style={{height: "42px"}}></div>
      <LoadingSvg></LoadingSvg>
    </>
  }


}

const StyledTabPanels = styled(TabPanels)`
  padding-top: 0;
`