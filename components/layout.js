import Nav from './nav';

//creating nav component to share the nav across the entire app
//instead of having to write import Nav for every page.
//using props for children components to pass the props for each page.
const Layout = ({ children }) => (
    <div>
        <Nav /> 
        {children}
    </div>
);

export default Layout;