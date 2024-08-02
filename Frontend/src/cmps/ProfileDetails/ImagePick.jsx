export function ImagePick() {
     
    return (
        <div className="flex flex-row items-center justify-between bg-background-mainBg text-slate-500 w-full h-[11em] p-4 mb-8 rounded-xl">
        <h4>Profile Picture</h4>
        <div className="flex flex-col bg-purple-light text-purple-bright justify-center items-center p-4 rounded-xl h-full font-bold gap-4 cursor-pointer hover:text-slate-700 hover:bg-purple-200 duration-200">
          <i className="fa-regular fa-image fa-xl"></i>
          <h4>+ Upload Image</h4>
        </div>
        <div className="flex flex-col">
          <h5>Image must be below 1024x1024px</h5>
          <h5>Use PNG or JPG format</h5>
        </div>
      </div>
    )
}