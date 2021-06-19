import Link from 'next/link';


const Index = () => (
    <div>
        <h2>Hello from NextJS</h2>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
    );

export default Index;