import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  PageContent,
  PageLayout,
  PageSideNav,
} from '@sharedui/components/page-layout';
import { ItemProps } from '@sharedui/components/page-layout/side-nav-item';
import { aimPaths } from '@sharedui/constants/paths';
import HomePage from './home-page';
import ManagedUsersListPage from './users';
import CreateUserPage from './users/create';
import UpdateUserPage from './users/update';
import ManagedUserDetailsPage from './users/details';
import PermissionPoliciesPage from './policies';
import CreatePolicyPage from './policies/create';

const AIMHome = () => {
  const navigate = useNavigate();

  const handlePathChange = (path: string) => {
    if (!path) return; // ignore empty paths
    navigate(path);
  };

  return (
    <PageLayout>
      <PageSideNav
        title="Access and Identity Manager"
        items={sideNavItems}
        onItemClick={handlePathChange}
      />
      <PageContent>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="users/*">
            <Route path="" element={<ManagedUsersListPage />} />
            <Route path="create" element={<CreateUserPage />} />
            <Route path="update/:userId" element={<UpdateUserPage />} />
            <Route
              path="details/:userId"
              element={<ManagedUserDetailsPage />}
            />
          </Route>
          <Route path="policies/*">
            <Route path="" element={<PermissionPoliciesPage />} />
            <Route path="create" element={<CreatePolicyPage />} />
            <Route path="update/:userId" element={<UpdateUserPage />} />
            <Route
              path="details/:userId"
              element={<ManagedUserDetailsPage />}
            />
          </Route>
        </Routes>
      </PageContent>
    </PageLayout>
  );
};

const sideNavItems = [
  { title: 'Home', path: aimPaths.HOME },
  {
    title: 'Users',
    path: aimPaths.USERS,
  },
  {
    title: 'Policies',
    path: aimPaths.POLICIES,
  },
] as ItemProps[];

export default AIMHome;
