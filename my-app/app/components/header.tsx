import Link from 'next/link';

export function Header() {
  const myLinks = [
    { name: 'About', href: '/' },
    { name: 'services', href: '/' },
    { name: 'About me', href: '/' },
    { name: 'contact us', href: '/' },
    { name: 'Fellows', href: '/fellows' },
  ];

  return (
    <>

      <div className='flex justify-between flex-wrap items-center py-4 px-8 bg-gray-300'>

        <nav className="flex flex-wrap  gap-4">
          {myLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-red-300 px-2 py-1 rounded-md text-black no-underline flex flex-col justify-between mx-auto"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="bg-gray-500  text-white  rounded-full border p-2">
          See my work
        </button>
      </div>





































    </>
  );
}