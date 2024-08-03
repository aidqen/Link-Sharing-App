import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { useSelector } from "react-redux"

export function LinkCopy() {
    const [isCopy, setIsCopy] = useState(false)

    const { firstName } = useSelector(state => state.personalDetails)
  
    function copyToClipboard() {
      setIsCopy(true)
      setTimeout(() => {
        setIsCopy(false)
      }, 2000)
    }
     
    return (
        <div className="flex flex-row justify-between items-center w-[20em] p-2 ps-6 border border-slate-400 rounded-full mb-4">
        <p>
          devlinks/<span className="font-semibold">{firstName}</span>
        </p>
        <CopyToClipboard
          text={`devlinks/${firstName}`}
          onCopy={copyToClipboard}
        >
          <button className='font-bold bg-purple-light text-purple-bright rounded-full p-2 flex flex-row gap-[0.2em]'>{isCopy ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
    )
}