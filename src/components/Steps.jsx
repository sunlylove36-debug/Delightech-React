import React from 'react'
import { useTranslation } from "react-i18next";

const getSteps = (t) => [
  {title: t('downloadApp', { ns: 'step' }), desc: t('downloadAppDesc', { ns: 'step' })},
  {title: t('quickResult', { ns: 'step' }), desc: t('quickResultDesc', { ns: 'step' })},
  {title: t('directTransfer', { ns: 'step' }), desc: t('directTransferDesc', { ns: 'step' })},
  {title: t('repayment', { ns: 'step' }), desc: t('repaymentDesc', { ns: 'step' })},
]

export default function Steps(){
  const { t } = useTranslation(["step"]);
  const steps = getSteps(t);
  
  return (
    <section id="step" className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <h3 className="text-3xl font-bold py-3 text-white text-center dark:text-white"><span className="text-blue-500">{t('howto', { ns: 'step' })}</span> {t('process', { ns: 'step' })}</h3>
      <div className="grid grid-cols-1 py-5 md:grid-cols-4 gap-6">
        {steps.map((s,idx)=>(
          <div key={idx} className="bg-white py-5 dark:bg-gray-700 dark:text-gray-300 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold mb-2 text-blue-500">{idx+1}</div>
            <h4 className="font-semibold text-gray-800 dark:text-blue-400">{s.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{s.desc}</p> 
          </div>
        ))}
      </div>
    </section>
  )
}
