import Link from 'next/link';
import Nav from '../components/nav';

const styles = {
    color:'blue', 
    border:'.05rem solid blue', 
    padding:5
}

const Index = () => (
    <div>
        <Nav />
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a style={styles}>About</a>
        </Link>
    </div>
    );



export default Index;