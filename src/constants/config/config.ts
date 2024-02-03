import currentEnv from './dev.json';

const envConfig = {
  appName: currentEnv.appName,
  baseUrl: currentEnv.baseUrl,
  vendor: currentEnv.vendor,
  apiVersion: currentEnv.apiVersion,
  //Firebase configuration
  apiKey: currentEnv.apiKey,
  authDomain: currentEnv.authDomain,
  projectId: currentEnv.projectId,
  storageBucket: currentEnv.storageBucket,
  messagingSenderId: currentEnv.messagingSenderId,
  IosAppId: currentEnv.IosAppId,
  AndroidAppId: currentEnv.AndroidAppId,
  measurementId: currentEnv.measurementId,
  notificationChannelId: currentEnv.notificationChannelId,
  notificationChannelName: currentEnv.notificationChannelName,
  termsOfUseURL: currentEnv.termsOfUseURL,
  privacyPolicyURL: currentEnv.privacyPolicyURL,
};

export default envConfig;
