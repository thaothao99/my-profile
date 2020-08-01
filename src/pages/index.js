import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../config/routes'
import 'antd/dist/antd.css';

function AppRouter() {
    return (
        <Switch>
            {
                routes.map((route,index)=> 
                    <Route 
                        key={index} 
                        path={route.path}
                        exact={route.exact}
                        component={()=>{
                            const Component = React.lazy(()=>import(`./${route.component}`))
                            return (
                                <React.Suspense fallback="null"><Component></Component></React.Suspense>
                            )
                        }}
                    ></Route>
                )
            }
        </Switch>
    )
}
export default AppRouter