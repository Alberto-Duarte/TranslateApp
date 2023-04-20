import { useRef } from "react"

const Field = ({value, onChange}) => {
    
    const textRef = useRef('');
    const clearInputText = () => {textRef.current.value = ''; onChange('')};

    return (
        <div className="w-1/2">
            <label
                for="text"
                className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                    English Text
                </label>
            <div className="relative mt-2">
                <button className="absolute right-1 mr-6 mt-4 rounded-full bg-gray-300 h-4 w-4" onClick={clearInputText} ></button>
                <textarea 
                    name="text"
                    id="text"
                    value={value}
                    ref={textRef}
                    onChange={(e) => onChange(e.target.value)}
                    className="resize-none h-40 p-4 font-mono block w-full rounded-md border-0 text-gray-900 shadow-sm ring-tomate ring-1 ring-inset"
                    placeholder="Enter your text here"
                    />
            </div>
        </div>
    )
}

export default Field