import React from 'react'
import { useTranslation } from 'react-i18next'
import BrasilFlag from '@/assets/logos/BrasilFlag.png'
import MexFlag from '@/assets/logos/MexFlag.png'
import Flag from '../flag'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className="flags-container">
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'} 
        onClick={() => handleChangeLanguage('pt-BR')} 
      />
      <Flag
        image={MexFlag}
        isSelected={selectedLanguage === 'es-419'} 
        onClick={() => handleChangeLanguage('es-419')} 
      />
    </div>
  )
}

export default I18n