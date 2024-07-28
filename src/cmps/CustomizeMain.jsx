export function CustomizeMain() {
  return (
    <div className="customize-container pt-11 flex flex-col bg-white rounded-md w-full">
      <div className="flex flex-col gap-10">
        <header>
          <h2 className="text-4xl font-bold text-[#373737]">Customize your links</h2>
          <p className="text-[#757575] text-sm">
            Add / Edit / Remove links below and then share all your profiles
            with the world!
          </p>
        </header>
        <button className=" text-center border-[1px] border-purple-bright text-purple-bright w-full h-7">+ Add new link</button>
      </div>
    </div>
  )
}
