import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LinkSharingIndex } from './pages/LinkSharingIndex'
import { ProfileDetails } from './pages/ProfileDetails'
import { LoginSignup } from './pages/LoginSignup'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  return (
    <Router>
      <section className="app h-calcCustom font-sans overflow-x-hidden m-7">
        <AppHeader />
        <main className=''>
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
