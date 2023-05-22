import Cart from "./components/Cart"
import { Provider } from "react-redux";
import store from "./components/store"
function App() {
  return (
    <Provider store={store}>
       <Cart/>
    </Provider>
  );
}

export default App;
