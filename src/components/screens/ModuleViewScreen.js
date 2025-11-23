import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView.js";

export const ModuleViewScreen = ({ navigate, route }) => {
  // Initalisations --------------------------------------------
  const { module } = route.params;

  // States ---------------------------------------------------

  // Handlers -------------------------------------------------

  // View -----------------------------------------------------
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
