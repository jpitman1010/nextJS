import Link from 'next/link';
import Index from './index';
import Nav from '../components/nav';
import Head from 'next/head';


const styles = {
    color:'blue', 
    border:'.05rem solid blue', 
    padding:5
}

const About = () => (
    <div>
        <Head>
            <title>About</title>
        </Head>
        <Nav />
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
    </div>
)

export default About;