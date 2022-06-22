import { GlobalStorage } from "./Context/Context";
import Painel from "./Painel";
import Predio from "./Predio";

function App() {
  return (
    <GlobalStorage>
      <div className="flex items-center justify-around w-full h-full border">
        <Predio />
        <Painel />
      </div>
    </GlobalStorage>
  );
}

export default App;
