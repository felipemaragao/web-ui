export const environment = {
  production: true,
  apiUrl: 'https://xxxxxx',
  tokenWhitelistedDomains: [ new RegExp('xxxxx.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
