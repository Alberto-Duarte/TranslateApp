import { useEffect, useState } from 'react'
import Field from "../components/Field"
import Languages from "../components/Languages"
import Translate from "../components/Translate"


export default function Home() {
  const [text, setText]=useState('')
  const [language, setLanguage]=useState('es')
  useEffect(() => {
    console.log('Este es mi idioma: ', language, text)
  }, [text, language])
  return (
    <div className="bg-white/80 m-8 p-8 rounded-3xl container max-w-5xl mx-auto my-12">
      <div className='flex justify-between'>
        <h1 
        className='inline text-4xl font-bold mb-8'
        >Translapte App</h1>
        <span className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
          <span className="text-xs font-medium leading-none text-white">TW</span>
        </span>
      </div>
            <hr className='border-garnet'/>
      <Languages language={language} onlanguageChange={setLanguage}/>
            <hr className='border-garnet'/>
      <div className='mt-6 flex gap-8'>
        <Field onChange={setText} value={text}/>
        <Translate language={language} text={text}/>
      </div>
    </div>
  )
}
