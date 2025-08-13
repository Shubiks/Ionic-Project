import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app',
  webDir: 'dist',
  server:{
    url: 'http://172.16.72.16:8100/',
    cleartext: true // Allow cleartext traffic for development purposes
  }
};

export default config;
