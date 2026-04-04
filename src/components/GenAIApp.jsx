import '../i18n.js'
import { useTranslation } from 'react-i18next'


const GenAI = () => {
  const { t } = useTranslation();

  return (
    <>
<div name='GenAI' className='w-full min-h-screen bg-white'>


      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>{t('genai_page.title')}</h1>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              {t('genai_page.wip')}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GenAI
