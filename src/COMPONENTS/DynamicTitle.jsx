import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'River Voyage | Home',
      '/updateProfile': 'River Voyage | Update Profile',
      '/myProfile': 'River Voyage | My Profile',
      '/login': 'River Voyage | Login',
      '/register': 'River Voyage | Register',
      '/forgotPassword': 'River Voyage | Forgot Password',
    };

    document.title = pageTitles[location.pathname] || 'River Voyage';
  }, [location]);

  return null;
};

export default DynamicTitle;
