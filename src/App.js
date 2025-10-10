import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./components/screens/ModuleListScreen";
import ModuleAddScreen from "./components/screens/ModuleAddScreen";
import ModuleViewScreen from "./components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./components/screens/ModuleModifyScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initalisations --------------------------------------------

  // States ---------------------------------------------------

  // Handlers -------------------------------------------------

  // View -----------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleViewScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List Modules" }}
        />

        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Modules" }}
        />

        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Modules" }}
        />

        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Modules" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
