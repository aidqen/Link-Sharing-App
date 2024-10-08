import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LinkSharingIndex } from './pages/LinkSharingIndex'
import { ProfileDetails } from './cmps/ProfileDetails/ProfileDetails'
import { LoginSignup } from './pages/LoginSignup'
import { AppHeader } from './cmps/AppHeader/AppHeader'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ProfileLaunchPreview } from './pages/ProfileLaunchPreview'
import { CustomizeMain } from './cmps/CustomizeMain/CustomizeMain'
import { Home } from './pages/Home'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app h-calcCustom font-sans overflow-x-hidden m-7">
          <AppHeader />
          <main className='h-mainHeight'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<LinkSharingIndex />} >
                <Route path="/links/profile" element={<ProfileDetails />} />
                <Route path="/links/edit" element={<CustomizeMain />} />
              </Route>
              <Route path="/preview" element={<ProfileLaunchPreview />} />
              <Route path="auth" element={<LoginSignup />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}
