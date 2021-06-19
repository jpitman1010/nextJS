import Link from 'next/link';
import Layout from '../components/layout';
import Head from 'next/head';

//can remove the Nav and go through Layout
//and the actual props is the entire content within 
//the Layout tags on this page now

const styles = {
    color:'blue', 
    border:'.05rem solid blue', 
    padding:5
}

const Index = () => (
    <Layout title="Home Page built with Next JS" 
    footer={`Copyright ${new Date().getFullYear()}`}>
        {/* adding in these properties to Layout so that they can pass as props to the 
        layout page. */}
        <Head>
            <title>Home</title>
        </Head>
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a style={styles}>About</a>
        </Link>
    </Layout>
    );



export default Index;