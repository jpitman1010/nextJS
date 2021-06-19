import Link from 'next/link';
import Nav from '../components/nav';
import Head from 'next/head';

const styles = {
    color:'blue', 
    border:'.05rem solid blue', 
    padding:5
}

const Index = () => (
    <div>
        <Head>
            <title>Home</title>
            <meta name="description" content="My SEO React app wtih Next JS" />
            <meta name="keywords" content="next react seo" />
            <meta name="author" content="Julie Pitman" />
        </Head>
        <Nav />
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a style={styles}>About</a>
        </Link>
    </div>
    );



export default Index;