const Languages = ({language, onlanguageChange}) => {
    
    return (
        <div>
            {/* <h3 className="block text-sm font-medium leading-6 text-gray-900 font-sans">Select desired language</h3> */}
            <div className='py-4 flex flex-row gap-4 my-4 flex-wrap justify-center'>
                {LANGUAGES.map(({label, value}) => {
                    return (
                        <button
                            key={value}
                            type="button"
                            className={
                                `${language === value ? 'bg-tomate hover:bg-tomate/80 text-white' : 'border-garnet border-2 hover:border-garnet/80 hover:bg-[#7e3630] hover:text-white'} rounded px-2 py-1 text-xs font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
                            }
                            onClick={() => onlanguageChange(value)}>

                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

export default Languages 