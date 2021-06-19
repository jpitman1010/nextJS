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
    <Layout>
        <Head>
            <title>Home</title>
            <meta name="description" content="My SEO React app wtih Next JS" />
            <meta name="keywords" content="next react seo" />
            <meta name="author" content="Julie Pitman" />
        </Head>
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a style={styles}>About</a>
        </Link>
    </Layout>
    );



export default Index;