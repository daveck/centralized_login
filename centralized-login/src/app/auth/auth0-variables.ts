interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'btDdZXArj9wRgZIYpgbNXUFDWF5f7H3G',
  domain: 'selman.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
