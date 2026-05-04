import  Link  from 'next/link';

export function Header() {
  return (
    <>

      <div className='flex  justify-center flex -column bg-gray-300 w-3/4 max-w-4xl h-16 space -x-2 py-0 px-0 md:h-15  mx-auto pb-0 mb-0 bg- gray-300 text -black float-center '>

        <nav className="flex  gap-8 justify-center w-3/4  bg-gray-300 items-center ">
            <Link href='/' className="text-black no-underline flex flex-col mx-auto my-2">
                Albert
            </Link>
            <Link href='/' className="text-black no-underline flex flex-col mx-auto my-2">
                services
            </Link>
            <Link href='/' className="text-black no-underline flex flex-col mx-auto my-2">
                case studies
            </Link>
                <Link href='/' className="text-black no-underline flex flex-col mx-auto my-2">
                About me
                </Link>
                <Link href='/' className="text-black no-underline flex flex-col mx-auto my-2">contact us</Link>
                
        
        <button className="bg-gray-300 text-black border  justify-end radius-25px float- right px-2 py-1  gap-8 my-4 ml-10 mx-auto rounded sm-4px">see my work</button>
        </nav>
        </div>




















      
















    </>
  );
}