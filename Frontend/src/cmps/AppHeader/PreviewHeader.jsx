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
        className="py-3 px-6 border border-purple-bright text-purple-bright rounded-md font-semibold  hover:bg-purple-bright hover:text-white duration-200"
      >
        Back To Editor
      </button>
      <button className="py-3 px-6 border border-purple-bright text-white bg-purple-bright rounded-md font-semibold hover:bg-white hover:text-purple-bright duration-200">
        Share Link
      </button>
    </>
  )
}
