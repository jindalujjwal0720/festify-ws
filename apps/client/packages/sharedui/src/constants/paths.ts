export const rootPaths = {
  DOCS: '/docs',

  HOME: '/',
} as const;

export const besPaths = {
  SERVICE: '/bes',

  HOME: '/bes/home',

  DOCS: '/docs/bes',

  INSTANCES: '/bes/home/instances',
  CREATE_NEW_INSTANCE: '/bes/home/instances/create',
  UPDATE_INSTANCE: '/bes/home/instances/update',
  INSTANCE_DETAILS: '/bes/home/instances/details',

  EMAIL_TEMPLATES: '/bes/home/templates',
  CREATE_NEW_EMAIL_TEMPLATE: '/bes/home/templates/create',
  UPDATE_EMAIL_TEMPLATE: '/bes/home/templates/update',
  EMAIL_TEMPLATE_DETAILS: '/bes/home/templates/details',
} as const;

export const aimPaths = {
  SERVICE: '/aim',

  HOME: '/aim/home',

  DOCS: '/docs/aim',

  USERS: '/aim/home/users',
  CREATE_NEW_USER: '/aim/home/users/create',
  USER_DETAILS: '/aim/home/users/details',
  UPDATE_USER: '/aim/home/users/update',

  POLICIES: '/aim/home/policies',
  CREATE_NEW_POLICY: '/aim/home/policies/create',
  UPDATE_POLICY: '/aim/home/policies/update',
  POLICY_DETAILS: '/aim/home/policies/details',
} as const;

const paths = {
  root: rootPaths,
  bes: besPaths,
  aim: aimPaths,
} as const;

export default paths;
