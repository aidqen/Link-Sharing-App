import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LinkSharingIndex } from './pages/LinkSharingIndex'
import { ProfileDetails } from './pages/ProfileDetails'
import { LoginSignup } from './pages/LoginSignup'
import { AppHeader } from './cmps/AppHeader/AppHeader'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ProfileLaunchPreview } from './pages/ProfileLaunchPreview'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app h-calcCustom font-sans overflow-x-hidden m-7">
          <AppHeader />
          <main className="">
            <Routes>
              <Route path="/edit" element={<LinkSharingIndex />} />
              <Route path="/profile/:userId" element={<ProfileDetails />} />
              <Route path="/preview" element={<ProfileLaunchPreview />} />
              <Route path="auth" element={<LoginSignup />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}
