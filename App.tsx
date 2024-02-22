/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { AuthConfiguration, authorize } from 'react-native-app-auth'
import Button from './components/Button';

const config: AuthConfiguration = {
  issuer: 'https://id-qa.aveon.io',
  clientId: '1028ab67-8602-41cc-a385-2b27ed50393e',
  clientSecret: '42300b6a-0421-ff78-d976-6e42c0d27159',
  redirectUrl: 'tnnp://oauth',
  scopes: ["openid", "profile", "manage:association", "manage:identity", "offline_access", "roles"],
}

function App(): React.JSX.Element {

  const handleAuthorize = useCallback(async() => {
    try {
      console.log(new Date().getTime());
      const result = await authorize(config);
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button onPress={() => handleAuthorize()} text={'Authorize'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
