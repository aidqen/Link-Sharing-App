import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { PreviewHeader } from './PreviewHeader';
import { MainHeader } from './MainHeader';

export function AppHeader() {
  const [isPreview, setIsPreview] = useState(false);
  

  const location = useLocation()
  console.log(isPreview);
  useEffect(() => {
    if (location.pathname === '/preview') {
      setIsPreview(true)
    } else {setIsPreview(false)}
  }, [location])
  


  

  return (
    <>
      {isPreview ? <PreviewHeader /> : <MainHeader />}
    </>
    
  )
}
