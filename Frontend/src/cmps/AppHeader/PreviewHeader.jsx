import { useNavigate } from 'react-router-dom'

export function PreviewHeader() {
  const navigate = useNavigate()

  function navigateToEditor() {
    navigate('/edit')
  }

  return (
    <>
      <button
        onClick={navigateToEditor}
        className="py-3 px-6 border-[1px] border-purple-bright text-purple-bright rounded-md"
      >
        Back To Editor
      </button>
      <button className="py-3 px-6 border-[1px] border-purple-bright text-white bg-purple-bright rounded-md ">
        Share Link
      </button>
    </>
  )
}
