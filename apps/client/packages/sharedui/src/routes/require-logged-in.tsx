import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '@rootui/store/auth';
import { useSelector } from 'react-redux';

const RequireLoggedIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate to="/a/login" state={{ from: window.location.pathname }} />
    );
  }

  return <Outlet />;
};

export default RequireLoggedIn;
