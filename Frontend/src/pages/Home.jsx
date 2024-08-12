import { HomepagePhone } from "../cmps/PhonePreview/HomepagePhone";

export function Home() {
  return (
    <div className="h-full w-full flex flex-row rounded-2xl bg-background-white items-center">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col text-8xl font-extrabold">
          <h1>One Link,</h1>
          <h1>Infinite Possibilities</h1>
        </div>
        <h2 className="text-3xl">Share All Your Content in One Place!</h2>
        <button className="hover:bg-white hover:text-purple-bright duration-200 border border-purple-bright bg-purple-bright text-white font-bold w-[8rem] rounded-3xl py-[0.8rem] px-2 mt-6">Get Started!</button>
      </div>
      <HomepagePhone />
    </div>
  )
}
