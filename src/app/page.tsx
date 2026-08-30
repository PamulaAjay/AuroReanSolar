// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link href="/about">About</Link>
//       <br />
//       <Link href="/contact">Contact</Link>
//       <br />
//       <Link href='/docs/a'>A</Link>
//        <br />
//       <Link href='/docs/b'>B</Link>
//        <br />
//       <Link href='/docs/c'>C</Link>
//     </div>
//   );
// }


// import PostsList from '../components/OverallComponent/PostsList';

// export default function HomePage() {
//   return (
//     <main>
//       <h1>Client-Fetched Post Titles</h1>
//       <PostsList />
//     </main>
//   );
// }

'use client';
import Footer from '../components/Footer';
import Body from '../components/Body';
export default function HomePage() {
  return (
    <>
      <Body />
      <Footer />
    </>
  );
}
