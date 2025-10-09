import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./screens/ModuleListScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initalisations --------------------------------------------

  // States ---------------------------------------------------

  // Handlers -------------------------------------------------

  // View -----------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModuleListScreen">
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List Modules" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
