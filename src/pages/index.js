import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from '../config/routes'
import 'antd/dist/antd.css';
import { Skeleton } from 'antd';

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
                                <React.Suspense fallback={<Skeleton></Skeleton>}><Component></Component></React.Suspense>
                            )
                        }}
                    ></Route>
                )
            }
            <Redirect to='/'></Redirect>
        </Switch>
    )
}
export default AppRouter