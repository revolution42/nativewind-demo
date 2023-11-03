/// <reference types="nativewind/types" />
import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import "./../global.css";


export default function MainLayout() {
  return  (
	<View>
    <View className="text-red-500">
      <Text>Hello, World!</Text>
    </View>
      <Text>
		fdgfg
       
      </Text>
	  <Slot />
    </View>
	);
}