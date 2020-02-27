import React from "react";
import "./style.sass";
import {createStore} from "redux";
import reducer from "./redux/tickerReducer";
import {Provider} from "react-redux";
import {PriceViewer} from "./containers/priceViewer";

const store = createStore(reducer);

const App = () =>
    <Provider store={store}>
        <PriceViewer/>
    </Provider>;

export default App;
