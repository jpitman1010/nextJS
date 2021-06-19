import Link from 'next/link';

const About = () => (
    <div>
        <h2>About page.</h2>
        <Link href="/">
            <a style={{color:'blue', border:'.05rem solid blue', padding:5}}>Home</a>
        </Link>
    </div>
)

export default About;