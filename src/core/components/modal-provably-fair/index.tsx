import Modal from '@/core/components/modal'
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

export default function About({ show, toggle }: Props) {
  const modalRef = React.useRef()

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      toggle()
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  const { t } = useTranslation();
  return (
    <Modal show={show} toggle={toggle}>
      <div className="py-0" ref={modalRef}>
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
            {t('provably')}
          </h1>
          <button
            onClick={(_) => toggle()}
            className="btn p-0 btn-sm hover:bg-transparent btn-ghost "
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </section>
        <div className="p-4 text-sm ">
          <div className="grid align-center">
            <img
              src="../images/icons/SecureLogo.svg"
              className="h-35 mx-auto"
            />
            <p className="flex justify-center">
            {t('fairGame')}
            </p>
            <div className=" flex rounded p-3 ">
              <p className="text-xs font-semibold">
              {t('cripto')}
              </p>
            </div>
          </div>
          <div className='p-3'>
            <p className="font-semibold mb-2">
            {t('howWorks')}
            </p>
            <p className="font-semibold mb-3">{t('explain')}</p>
            <p className="mb-6">
            {t('result')}
            </p>

            <p className="font-semibold mb-2">{t('more')}</p>
            <p className="mb-3">
            {t('roundResult')}
            </p>

            <p>
            {t('gameResult')}
            </p>
          </div>
          <div className="p-3">
            <img
              src="../images/icons/provably.svg"
              className=" bg-[#2A303C] p-3 md:p-10 lg:p-20"
            />
            <p className="font-semibold mt-2">
            {t('check')}
            </p>

            <li className="list">
            {t('verify')}
            </li>
            <li className="list">
            {t('window')}
            </li>
            <li className="list">
            {t('hashVersion')}
            </li>
            <li className="list">
            {t('topThree')}
            </li>
          </div>
        </div>
      </div>
    </Modal>
  )
}
