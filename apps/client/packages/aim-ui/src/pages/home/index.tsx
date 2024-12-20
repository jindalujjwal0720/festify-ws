import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  PageContent,
  PageLayout,
  PageSideNav,
} from '@sharedui/components/page-layout';
import { ItemProps } from '@sharedui/components/page-layout/side-nav-item';
import { aimPaths } from '@sharedui/constants/paths';
import Dashboard from './dashboard';
import ManagedUsersListPage from './users';
import CreateUserPage from './users/create';
import UpdateUserPage from './users/update';
import ManagedUserDetailsPage from './users/details';
import PermissionPoliciesPage from './policies';
import CreatePolicyPage from './policies/create';
import PermissionPolicyDetailsPage from './policies/details';
import UpdatePolicyPage from './policies/update';

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
          <Route path="" element={<Dashboard />} />
          <Route path="users/*">
            <Route path="" element={<ManagedUsersListPage />} />
            <Route path="create" element={<CreateUserPage />} />
            <Route path="update/:alias" element={<UpdateUserPage />} />
            <Route path="details/:alias" element={<ManagedUserDetailsPage />} />
          </Route>
          <Route path="policies/*">
            <Route path="" element={<PermissionPoliciesPage />} />
            <Route path="create" element={<CreatePolicyPage />} />
            <Route path="update/:alias" element={<UpdatePolicyPage />} />
            <Route
              path="details/:alias"
              element={<PermissionPolicyDetailsPage />}
            />
          </Route>
        </Routes>
      </PageContent>
    </PageLayout>
  );
};

const sideNavItems = [
  { title: 'Dashboard', path: aimPaths.HOME },
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
