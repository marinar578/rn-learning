useState

useReducer

react native layout:
- box object
- flex-box
- position


react navigation (set it up in project from the beginning - `npm install react-navigation`):
- DrawerNavigator (left hand side menu)
- BottomTabNavigator (footer menu)
- StackNavigator (button on main page leads to page 2, page 2 includes back button)

- run in cli with env variables after installing bable:
API_KEY="" npm start --reset-cache

- create a new react native app in cli with expo (choose "blank" when prompted):
npx expo-cli init blog --npm

- install react-navigation in cli:
npm install react-navigation


React Navigation Fix from Udemy: The Complete React Native + Hooks Course
Important Message about React Navigation v5
This project will be using the v4 version of React Navigation and not the v5 version. To date, this code still works as expected. The v4 version is still important to know and understand as it is used widely in existing codebases in many organizations. I highly encourage you to continue on with the course as it is so that you fully understand how React Navigation works. Once you have finished the course, you can use this as a self-study opportunity to attempt a migration of your finished working projects to v5. The docs provide some great resources on this: https://reactnavigation.org/docs/upgrading-from-4.x/.

1. React Navigation v4 Installation
note: You cannot mix Yarn and npm in the same project as it will break your dependencies. You must consistently use the same package manager. If you have yarn installed on your computer it will be used by default to generate the project. In this case, you must use Yarn to install your dependencies.

1. Install React Navigation

npm install react-navigation --legacy-peer-deps

or

yarn add react-navigation

2. Install Dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

4. Start the app and clear cache with expo r -c

2. Update Imports
Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
Errors?
If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)

Then, run npm install --legacy-peer-deps and then npm start.

React Navigation v4 Docs:
https://reactnavigation.org/docs/4.x/getting-started

