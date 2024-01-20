
import React from 'react'
import { useTranslation } from 'react-i18next';

const Flag = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <button className='text-black ml-1 border-solid border-2 border-black btn bg-white hover:bg-white btn-sm py-1 px-2 flex items-center gap-1 rounded-md text-sm capitalize font-normal' 
        onClick={() => changeLanguage('ptbr')}>Português</button>
      <button className='text-black ml-4 border-solid border-2 border-black btn bg-white hover:bg-white btn-sm py-1 px-2 flex items-center gap-1 rounded-md text-sm capitalize font-normal' 
        onClick={() => changeLanguage('es')}>Español</button>
    </>
    
  );

}

export default Flag