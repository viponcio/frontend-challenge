import React, { useState } from 'react'
import About from '@/core/components/modal-provably-fair'

export default function Footer({}) {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    /* sm:w-[33%] xl:w-[25%] w-[100%] */
    <div
      className={`mt-2 mb-2 rounded-md border-gray-600 border-opacity-20 z-[999] bottom-0 left-0 flex h-7 border-[1px] relative w-full`}
    >
      <div className="flex items-center flex-grow">
        <p className="pl-2 text-[12px] md:text-[7px] lg:text-[9px] font-thin">
          This game is{' '}
        </p>
        <i className="fi fi-rs-shield-check pl-1 text-green-500 items-center">
          <img
            src="../images/icons/SecureLogo.svg"
            className="h-4 mx-auto"
          />
        </i>
        <button
          onClick={() => {
            setShowModal(!showModal)
          }}
          className="pl-1 text-[12px] md:text-[7px] lg:text-[9px] items-center"
        >
          <span className="">Provably Fair</span>
        </button>
      </div>
      <div className="flex items-center pr-3">
        <p className="text-[12px] md:text-[7px] lg:text-[9px] font-thin">
          powered by
        </p>
        <p className="pl-1  text-[12px] md:text-[7px] lg:text-[9px] underline">
          <a
            href="https://hypetech.games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HYPETECH
          </a>
        </p>
      </div>{' '}
      <About show={showModal} toggle={setShowModal} />
    </div>
  )
}
