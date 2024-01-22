import React, { useState } from 'react'

import If from '@/core/components/conditions/if'
import Tabs, { Tab } from '../tabs'
import BetsTab from './tabs/bets'
import HistoryTab from './tabs/history'
import BestTab from './tabs/best'
import Footer from '@/core/components/footer'
import { useTranslation } from 'react-i18next';
import Controls from '@/core/components/controls/crash-control'
import CrashForm from '../controls/crash/form'
type Props = {
  variant: string
  color: string
}

export default function TransactionBar({ variant, color }: Props) {
  const [activeTab, setActiveTab] = useState('bets')

  const tabs: Tab[] = [
    { key: 'bets', title: 'Apostas' },
    { key: 'history', title: 'Histórico' },
    // { key: 'best', title: 'Estatísticas' },
  ]
  const { t } = useTranslation();
  const [second, setSecond] = useState<boolean>(true)
  return (
    <div className="h-8 py-8">
      <div className="flex flex-col transaction-bar min-h-[400px] flex-1 grow h-full w-full p-3 rounded-md bg-black bg-opacity-20 border border-gray-600 border-opacity-20 scrollbar-track-rounded scrollbar-thumb-rounded relative custom-scrollbar scrollbar-thin scrollbar-thumb-pink-900 scrollbar-track-black">
        <section className="w-full flex justify-center ">
          <div className="w-full sm:w-[90%]">
            <Tabs
              tabs={tabs}
              size="w-1/2"
              active={activeTab}
              toggle={setActiveTab}
              variant={variant}
            />
          </div>
        </section>

        <If condition={activeTab == 'bets'}>
          <BetsTab />
        </If>

        <If condition={activeTab == 'history'}>
          <HistoryTab />
        </If>

        <If condition={activeTab == 'best'}>
          <BestTab />
        </If>
      </div>
      <Footer />
      {/* <CrashForm
        color={color}
        secondEnabled={second}
        toggleSecond={setSecond}
        position="right"
      /> */}
      <Controls color="lime" position={'center'} />
    </div>
  )
}
