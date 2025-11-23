import { use, useState } from "react";
import { StyleSheet } from "react-native"; // Added View import
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";

import initaialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  // Initalisations --------------------------------------------

  // States ---------------------------------------------------
  const [modules, setModules] = useState(initaialModules);

  // Handlers -------------------------------------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View -----------------------------------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
