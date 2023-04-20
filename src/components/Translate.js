import { useEffect, useState, useRef } from "react"
import axios from "axios"

const Translate = ({language, text}) => {
    const translation = useTranslation(text, language)
    return (
        <div className="w-1/2">
            <h2 className="block text-sm font-medium leading-6 text-gray-900 font-sans">Output</h2>
            <div className='bg-white break-words h-40 mt-2 font-mono w-full rounded ring-1 ring-tomate p-4 overflow-auto'>{translation}</div>
        </div>
    )
}

const useTranslation = (text, language) => {
    const [translated, setTranslated] = useState('')

    useEffect(() => {
        // if(!text) {
        //     return
        // }
        const cancelToken=axios.CancelToken.source()
        doTranslation(text,language,cancelToken,setTranslated)
    }, [text, language])

    return[translated]

}

const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce (
    async (input, languageCode, cancelToken, callback) => {
        try{
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI",
            {
                q: input,
                target: languageCode
            },
            {
                cancelToken: cancelToken.token
            }
        )
        callback(data.data.translations[0].translatedText)
        }
        catch (err){
            console.log('ERROR', err)
        }
    }
)

export default Translate 



