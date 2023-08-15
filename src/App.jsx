import { ActiveBreakpoints } from "./components/ActiveBreakpoints";
import { ComponentTags } from "./components/ComponentTags";

export function App() {
  return (
    <div className="uswds-devtools">
      <ComponentTags />
      <ActiveBreakpoints />
    </div>
  );
}
