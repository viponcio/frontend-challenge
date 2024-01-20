import React, { useContext, useEffect, useState } from 'react'
import { ClockIcon, EllipsisHorizontalCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Badge from '@/core/components/results/badge'
import If from '@/core/components/conditions/if'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import RoundInfoModal from '../shared/modals/crash/round-info'

type Props = {
  variant: string
}

type ICrashResult = {
  round_id?: number
  point: number
}

export default function MultiplierResults({ variant }: Props) {
  const [expand, setExpand] = useState(false)
  const { results, getResults } = useContext<any>(CrashGameContext)
  const { roundInfo, getRoundInfo } =
    useContext<any>(CrashGameContext)

  const [showInfo, setShowInfo] = useState<boolean>(false)

  const showRoundInfo = (roundId) => {
    getRoundInfo(roundId)
    setShowInfo(true)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <div className="w-full h-6 relative z-10">
      <If condition={!expand}>
        <div className="flex mr-10 items-center overflow-x-hidden gap-2">
          {results?.map((result, idx) => {
            return (
              <Badge
                key={idx}
                showRoundInfo={showRoundInfo}
                textColor={
                  result.point < 2
                    ? 'text-[#34b4ff]'
                    : result.point < 10
                    ? 'text-[#913ef8]'
                    : 'text-[#c017b4]'
                }
                roundId={result.round_id}
                multipler={result.point}
              />
            )
          })}
        </div>
      </If>

      <If condition={expand}>
        <div className="h-6"></div>
        <div className="bg-white backdrop-blur-sm bg-opacity-30 h-auto  absolute -top-1 w-full rounded-md">
          <div className="rounded-md results-bar">
            <div className="border border-b-0 flex items-center justify-between relative rounded-t px-2 h-8">
              <h3 className="font-bold">
                Histórico de Partidas
              </h3>
            </div>

            <div className="flex flex-wrap border shadow max-h-40 rounded-b p-2 gap-2 overflow-y-scroll scrollbar-w-0  scrollbar scrollbar-track-rounded scrollbar-thumb-rounded">
              {results?.map((result, idx) => {
                return (
                  <Badge
                    key={idx}
                    showRoundInfo={showRoundInfo}
                    textColor={
                      result.point < 2
                        ? 'text-[#34b4ff]'
                        : result.point < 10
                        ? 'text-[#913ef8]'
                        : 'text-[#c017b4]'
                    }
                    roundId={result.round_id}
                    multipler={result.point}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </If>

      <div className="results-btn h-auto flex absolute top-0 right-1 mt-0 z-10 rounded-xl">
        <button
          onClick={(e) => setExpand(!expand)}
        >
          <If condition={!expand}>
            <EllipsisHorizontalCircleIcon className="h-6" />
          </If>

          <If condition={expand}>
            <XMarkIcon className="h-6" />
          </If>
        </button>
      </div>

      <RoundInfoModal
        show={showInfo}
        data={roundInfo}
        toggle={setShowInfo}
      />
    </div>
  )
}