import {
  CommonActions as NavigationActions,
  StackActions,
} from '@react-navigation/native';
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

let navigator;

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(name, params) {
  navigator.navigate(name, params);
}

function push(name, params) {
  navigator.dispatch(
    StackActions.push({
      name,
      params,
    }),
  );
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(name, params) {
  navigator.dispatch(StackActions.replace(name, params));
}

function reset() {
  navigator.dispatch(NavigationActions.reset());
}

export default {
  navigate,
  push,
  navigateAndReset,
  setTopLevelNavigator,
  reset,
};
