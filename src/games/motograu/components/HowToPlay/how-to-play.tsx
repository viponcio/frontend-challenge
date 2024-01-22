import Modal from '@/core/components/modal';
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import { useTranslation } from 'react-i18next';
type Props = {
  show: boolean
  toggle: Function
}

export default function HowToPlay({ show, toggle }: Props) {
  const { t } = useTranslation();
  return (
    <Modal show={show} toggle={toggle}>
      <div className="py-0">
        <section
          className="modal-header py-2 flex justify-between items-center px-3 relative"
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 9999,
          }}
        >
          <h1 className="text-1xl uppercase font-bold pl-1 flex gap-4">
            <BanknotesIcon className="w-6 h-6" /> {t('rules')}
          </h1>
          <button
            onClick={(_) => toggle()}
            className="btn p-0 btn-sm hover:bg-transparent btn-ghost "
          >
            <XMarkIcon className="w-6 h-6"/>
          </button>
        </section>
        <div className="p-4 text-sm ">
          <div className="grid lg:flex gap-8 align-center py-4">
            <p>
            {t('entertainment')}
            </p>
          </div>
          <hr />
          <div className="p-3">
            <h1 className=' uppercase font-bold flex gap-4'>{t('instruction')}</h1>
            <div className="gap-12 mb-8">
              <div>
                <div className="description-box">
                  <p className="font-semibold mx-auto" style={{ lineHeight: '2' }}>
                  {t('step1')}
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-1.png"
                />
              </div>
              <div>
                <div className="description-box">
                  <p
                    className="font-semibold mx-auto"
                    style={{ lineHeight: '2' }}
                  >
                    {t('step2')}
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-2.png"
                />
                
              </div>
              <div>
                <div className="description-box">
                  <p
                    className="font-semibold mx-auto"
                    style={{ lineHeight: '2' }}
                  >
                    {t('step3')}
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-3.png"
                />
              </div>
            </div>
            <p className="gap-4">
            <span dangerouslySetInnerHTML={{ __html: t('time') }}></span>
            </p>
            <p className="text-base font-bold mt-6 mb-6">
            {t('howRules')}
            </p>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('betButton') }}></span>
            </li>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('panel') }}></span>
            </li>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('remove') }}></span>
            </li>
            <li className="list">
              {t('loose')}
            </li>
            <p className="text-base font-bold mt-6 mb-6">
              {t('automatic')}
            </p>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('auto') }}></span>
            </li>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('betAuto') }}></span>
            </li>

            <p className="text-base font-bold mt-6 mb-6">
              {t('gameInterface')}
            </p>
            <p className="text-light">
              {t('liveBet')}
            </p>
            <li className="list">
              {t('liveRound')}
            </li>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('historyPanel') }}></span>
            </li>
            <li className="list">
            <span dangerouslySetInnerHTML={{ __html: t('lastResult') }}></span>
            </li>
            <p className=" text-light mt-6">
              {t('chat')}
            </p>
            <li className="list">
              {t('generalChat')}
            </li>

            <p className="text-ligh mt-6">
              {t('problem')}
            </p>
            <li className="list">
              {t('conection')}
            </li>
            <li className="list">
              {t('refund')}
            </li>
          </div>
        </div>
      </div>
    </Modal>
  )
}
