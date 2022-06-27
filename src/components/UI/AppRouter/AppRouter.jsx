import React, {useContext, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../../router/GiveRoute";
import {AuthContext} from "../../../context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            {isAuth
                ? <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>

                : <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            key = {route.path}
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>

            }
        </div>
    );
};

export default AppRouter;