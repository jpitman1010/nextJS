import Link from 'next/link';
import Index from './index';
import Head from 'next/head';
import Layout from '../components/layout';


const styles = {
    color:'blue', 
    border:'.05rem solid blue', 
    padding:5
}

const About = () => (
    <Layout title="About Page built with Next JS" 
    footer={`Copyright ${new Date().getFullYear()}, built by Julie`}> 
            {/* //adding in these properties to Layout so that they can pass as props to the 
        //layout page.        */}
        <Head>
            <title>About</title>
        </Head>
        <h2>About page.</h2>
        <Link href="/">
            <a style={styles}>Home</a>
        </Link>
        <p>This is p div to show the NextJS styling using style tags <br />
            which are placed inside of the returned div for page, <br />
            DO NOT <br />
            place inside of Link tags, that only supports 1 child...
        </p>
        <style jsx>
            {`
                p {
                    color: indigo;
                    font-size: 20px;
                    font-weight: light;
                }           
            `}
        </style>
    </Layout>
)

export default About;