import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HeaderComponent }  from './components/Header';
import BodyComponent from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { AboutComponent } from './components/About';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';
import Cart from './components/Cart';

/* 
Heading
    -Logo
    -Nav items
Body
    -search
    -Restaurant container
        - restaurant card
Footer
    -copyright
    -links
    -address
    -contact
*/

// Lazy loading (this loads only when Grocery component is invoked)
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {

        const [userName, setUserName] = useState();

        useEffect(() => {
            const data = {
                name: 'Harsh'
            }
            setUserName(data.name);
        },[])

        return ( 
            <Provider store={appstore}>
                <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
                    <div className='app'>
                        <HeaderComponent />
                        <Outlet />
                        {/* <BodyComponent /> */}
                        {/* <FooterComponent /> */} 
                    </div>
                </UserContext.Provider>
            </Provider>
        )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <BodyComponent />
            },
            {
                path: '/about',
                element: <AboutComponent />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);

    // Working of below code 
    // React.createElement => ReactElement = JS object => HTMLElement(Render)

    // const heading = React.createElement(
    //     "h1",{
    //         id: "heading",
    //         class: "heading-class"
    //     },"Hello from React");

    // const parent = React.createElement("div",{id:"parent"},React.createElement(
    //     "div",
    //     {id:"child"},
    //     [React.createElement("h1",{},"New to react"),React.createElement("h2",{},"we'll manage")]
    // ))

    // Working of JSX code
    // JSX => React.createElement => ReactElement - JS object => HTMLElement(Render)
    
    // Creating h1 tag in JSX (Creating React element using JSX)

    // const jsxHeading = (<h1 id='heading' tabIndex='1'>
    //     New to React-JSX
    //     </h1>);


    // const Title = () => (
    //     <h1 className='head'>Title Component</h1>
    // )

    // const expression = "React is fun!";

    // React functional component (name in capital)
    // const HeadingComponent = () => (
    //         <div id='container'>
    //             {/* Embedding a expression by using curly brances into JSX */}
    //             <h3>{expression}</h3>
    //             {/* Embedding another component into JSX */}
    //             <Title />
    //             {/* Embedding another react element into JSX */}
    //             {jsxHeading}
    //             <h1>Heading by component</h1>
    //         </div>
    // )


    // const root = ReactDOM.createRoot(document.getElementById("root"));
    
    // root.render(parent);

    // root.render(jsxHeading); -> to render JSX React element 

    // To render a component
    // root.render(<HeadingComponent/>); 

    // parcel transpiles(convert) the code before sending it to JS engine (browser). -> with the help of babel