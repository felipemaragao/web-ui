// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:9092',
  apiAccount: 'http://localhost:9093',


  tokenWhitelistedDomains: [ new RegExp('localhost:9092'), new RegExp('localhost:9093') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]

};
