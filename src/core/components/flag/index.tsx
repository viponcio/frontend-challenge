
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Flag = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <>
    <div>
      <button className=" transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-75 ml-2 border-2 border-black btn-sm py-1 px-2 flex items-center gap-1 rounded-md font-medium" 
        onClick={() => changeLanguage('ptbr')}>Português</button>
      <button className=" transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-75 ml-2 border-2 border-black btn-sm py-1 px-2 flex items-center gap-1 rounded-md font-medium" 
        onClick={() => changeLanguage('es')}>Español</button>
    </div>
    </>
    
  );

}

export default Flag