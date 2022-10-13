import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '@/components/Card'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black p-5">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="grid auto-rows-fr grid-cols-1 grid-rows-5 gap-6 md:grid-cols-3 xl:grid-cols-4 xl:grid-rows-4">
        <div className="col-span-1 row-span-3 md:col-span-3 xl:col-span-4">
          <Card title="入力情報" description="20人が入力中" />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-3 xl:col-span-2">
          <Card title="体温グラフ" description="グラフ" />
        </div>
        <div className="col-span-1 md:col-span-1 md:row-span-3 xl:col-span-2">
          <Card title="ユーザー別" description="ユーザー" />
        </div>
      </div>
    </div>
  )
}

export default Home
