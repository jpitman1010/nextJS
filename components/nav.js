import Link from 'next/link';

const Nav = () => (
    <div className="my-nav">
        <img src="/static/painting.jpg" alt="Julie's painting" height={50} />
        <Link href="/"><a style={{marginRight:10}} href="">Home</a></Link>
        <Link href="/about"><a href="">About</a></Link>
    </div>
);

export default Nav;