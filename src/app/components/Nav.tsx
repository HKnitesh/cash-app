'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

export default function Nav() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="flex flex-row justify-between items-center w-full lg:px-16 md:px-8 px-5">
                <Image
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690898301/Mercor/logo_lzwnuk.svg'
                    height={43}
                    width={30}
                    alt="$ logo"
                    className=" h-11 w-7"

                />

                <div className="flex flex-row">


                    {/* desktop */}
                    <div className="hidden lg:flex lg:flex-row  text-sm font-extrabold leading-5 tracking-md uppercase items-center gap-5 ">
                        <Link href="/" className="hover:text-stone-400">sign in</Link>
                        <Link href="#" className="hover:text-stone-400">legal</Link>
                        <Link href="#" className="hover:text-stone-400">licenses</Link>
                        <Link href="#" className="hover:text-stone-400">security</Link>
                        <Link href="#" className="hover:text-stone-400">careers</Link>
                        <Link href="#" className="hover:text-stone-400">press</Link>
                        <Link href="#" className="hover:text-stone-400">support</Link>
                        <Link href="#" className="hover:text-stone-400">status</Link>
                        <Link href="#" className="hover:text-stone-400">codeblog</Link>
                    </div>
                </div>


                <Image
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690898736/Mercor/Layer_2_fccqcw.svg'
                    height={36}
                    width={48}
                    alt="eye logo"
                    className="hidden lg:flex w-16 h-9"
                    

                />

                <Image
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690898736/Mercor/Layer_2_fccqcw.svg'
                    height={36}
                    width={48}
                    alt="eye logo"
                    className=" w-16 h-9 lg:hidden flex"
                    onClick={() => { setToggle(true) }}

                />



            </div>
            {/* mobile responsiveness */}
            {
                toggle ? <div className="flex flex-row w-[250px] pt-8  h-screen  bg-white/[0.04] z-40 backdrop-blur-2xl text-white absolute top-0 right-0">
                    <div className="flex justify-end w-full mr-8 ">

                        <RxCross2 className="w-8 h-8 shrink-0 text-white " onClick={() => { setToggle(false) }} />
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start top-24 absolute ml-10 w-[210px] text-sm font-extrabold leading-5 tracking-md uppercase ">
                        <Link href="/" className="hover:text-stone-400">sign in</Link>
                        <Link href="#" className="hover:text-stone-400">legal</Link>
                        <Link href="#" className="hover:text-stone-400">licenses</Link>
                        <Link href="#" className="hover:text-stone-400">security</Link>
                        <Link href="#" className="hover:text-stone-400">careers</Link>
                        <Link href="#" className="hover:text-stone-400">press</Link>
                        <Link href="#" className="hover:text-stone-400">support</Link>
                        <Link href="#" className="hover:text-stone-400">status</Link>
                        <Link href="#" className="hover:text-stone-400">codeblog</Link>


                    </div>
                </div> : null
            }
        </>
    );
}




