import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/"><a style={{marginRight:10}} href="">Home</a></Link>
        <Link href="/about"><a href="">About</a></Link>
    </div>
);

export default Nav;