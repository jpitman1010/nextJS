import Nav from './nav';

//creating nav component to share the nav across the entire app
//instead of having to write import Nav for every page.
//using props for children components to pass the props for each page.

//adding props to get from other pages to display main title and footer from
//each page.
const Layout = ({ title, footer, children }) => (
    <div>
        <Nav /> 
        <h1>{title}</h1>
        {children}
        <h2>{footer}</h2>
    </div>
);

export default Layout;