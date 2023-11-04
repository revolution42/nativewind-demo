/// <reference types="nativewind/types" />
import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import "./../global.css";


export default function MainLayout() {
  return  (
	<View>
    <View className="flex-1 justify-center text-center">
    <Text className="text-green-700">
      HOme screen styles test ssss
    </Text>
   </View>
      <Text>
		fdgfg
       
      </Text>
	  <Slot />
    </View>
	);
}