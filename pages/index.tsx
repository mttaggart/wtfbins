import type { FormEvent, ReactElement } from 'react'
import React, { useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Head from 'next/head'
import { WtfBin } from '../interfaces/WtfBin'
import TextSearch from '../components/textsearch'
import WtfBinListView from '../components/wtfbinlistview'
import ActiveTagContainer from '../components/activetagcontainer'

interface AppProps {
  wtfBins: WtfBin[]
}

interface AppState {
  selectedTags: string[],
  textFilter: string
}

const Page: NextPageWithLayout = () => {
  return <p>What</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  const wtfBinsData = await fetch("https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json");
  const wtfBins = await wtfBinsData.json();
  return ({
      props: {
          wtfBins
      }
  })
}

export default function Home({ wtfBins }: AppProps) {

  const [{selectedTags, textFilter}, setState] = useState<AppState>({
    selectedTags: [],
    textFilter: ""
  });

  const updateTextFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      selectedTags,
      textFilter: e.target.value
    })
  }

  const addTagFilter = (addTag: string) => {
    setState({
      selectedTags: selectedTags.concat([addTag]),
      textFilter
    })
  }

  const removeTagFilter = (removeTag: string) => {
    setState({
      selectedTags: selectedTags.filter((tag: string) => tag !== removeTag ), 
      textFilter
    })
  }

  return (
    <>
      <Head>
        <title>WTFBins | Home</title>
      </Head>
      <Layout>
        <TextSearch textFilter={textFilter} updateTextFilter={updateTextFilter} />
        <ActiveTagContainer tags={selectedTags} removeTagFilter={removeTagFilter}/>
        <WtfBinListView 
          wtfBins={wtfBins} 
          tagFilter={selectedTags} 
          textFilter={textFilter}
          addTagFilter={addTagFilter}
        />
      </Layout>
    </>
  )
}
