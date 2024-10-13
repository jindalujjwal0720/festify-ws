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
  INSTANCE_DETAILS: '/bes/home/instances/details/',

  EMAIL_TEMPLATES: '/bes/home/templates',
  CREATE_NEW_EMAIL_TEMPLATE: '/bes/home/templates/create',
  UPDATE_EMAIL_TEMPLATE: '/bes/home/templates/update',
  EMAIL_TEMPLATE_DETAILS: '/bes/home/templates/details/',
} as const;

const paths = {
  root: rootPaths,
  bes: besPaths,
} as const;

export default paths;
