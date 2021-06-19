import Link from 'next/link';


const Index = () => (
    <div>
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a style={{color:'blue', border:'.05rem solid blue', padding:5}}>About</a>
        </Link>
    </div>
    );

export default Index;