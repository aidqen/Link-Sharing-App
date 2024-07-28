import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LinkSharingIndex } from './pages/LinkSharingIndex'
import { ProfileDetails } from './pages/ProfileDetails'
import { LoginSignup } from './pages/LoginSignup'

export function App() {
  return (
    <Router>
      <section className="app">
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
