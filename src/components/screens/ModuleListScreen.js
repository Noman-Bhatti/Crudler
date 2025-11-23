import { StyleSheet } from "react-native"; // Added View import
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initaialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  // Initalisations --------------------------------------------
  const modules = initaialModules;

  // States ---------------------------------------------------

  // Handlers -------------------------------------------------
  const handleSelect = (module) =>
    alert(`Module ${module.ModuleCode} selected`);
  // View -----------------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
