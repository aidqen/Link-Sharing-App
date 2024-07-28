import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LinkSharingIndex } from './pages/LinkSharingIndex'
import { ProfileDetails } from './pages/ProfileDetails'
import { LoginSignup } from './pages/LoginSignup'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  return (
    <Router>
      <section className="app w-screen h-screen font-sans bg-[#FAFAFA] overflow-x-hidden">
        <AppHeader />
        <main>
          <Routes>
            <Route path='/' element={<LinkSharingIndex />} />
            <Route path='/profile/:userId' element={<ProfileDetails />} />
            <Route path='auth' element={<LoginSignup />} />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
