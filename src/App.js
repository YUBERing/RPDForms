import React, {useRef} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {ContextBlocks} from "./constant/contexts";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    const listBlocks = [
        {
            label: 'Выбор дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Титульный блок',
            ref: useRef(null),
        },
        {
            label: 'Разработчики и рецензоры',
            ref: useRef(null),
        },
        {
            label: 'Цели и задачи дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Планируемые результаты обучения',
            ref: useRef(null),
        },
        {
            label: 'Место дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Титульный блок',
            ref: useRef(null),
        },
        {
            label: 'Титульный блок',
            ref: useRef(null),
        },
    ]

  return (
      <BrowserRouter>
          <div className="App">
              <ContextBlocks.Provider value={listBlocks}>
                  <Navbar/>
                    <Routes>
                        <Route
                            path={'/'}
                            element={<Main/>}
                        />
                    </Routes>
              </ContextBlocks.Provider>
          </div>
      </BrowserRouter>
  );
}

export default App;
