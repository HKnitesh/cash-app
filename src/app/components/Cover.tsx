import Nav from "./Nav"
import Image from "next/image"
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay, BsArrowDown, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Cover() {
    return (
        <div className=" bgi    flex lg:min-h-screen  flex-col justify-between pt-5 pb-8  text-white">
            <Nav />
            <Image
                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690907491/Mercor/intro-cube_1_fvcua7.svg'
                height={100}
                width={100}
                alt="intro-cube_1"
                className=" md:top-20 lg:left-48 absolute md:w-18 md:h-18 md:left-20   md:block hidden"
            />
            <Image
                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690907468/Mercor/intro-stairs_1_n79jql.svg'
                height={100}
                width={100}
                alt="intro-stairs_1"
                className=" lg:top-20 lg:right-60 absolute md:w-48 md:h-64 md:top-24 md:right-24 md:block hidden"
            />
            {/* mid section */}
            <div className="flex flex-col items-center gap-1 uppercase text-center lg:text-13xl md:text-11xl text-8xl font-bold lg:tracking-[1rem] tracking-md lg:leading-lg md:leading-md relative">
                <span className="z-10">cash</span>
                <Image
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690907533/Mercor/intro-phone_1_k8myrt.svg'
                    height={100}
                    width={100}
                    alt="phone"
                    className="z-20 absolute lg:w-96 lg:h-[28rem] lg:top-[-2.5rem] md:w-60 md:top-[-2rem] w-44"
                />
                <span className="z-30">app</span>
            </div>
            <Image
                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690907564/Mercor/intro-cubes_1_q92ilw.svg'
                height={100}
                width={100}
                alt="intro-cubes_1"
                className=" absolute lg:w-44 md:w-56  lg:left-44 md:left-24 bottom-18 md:block hidden"
            />
            <Image
                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690907595/Mercor/intro-pillar_1_b7vy7s.svg'
                height={100}
                width={100}
                alt="pillar"
                className=" absolute lg:w-72 md:w-96  lg:right-80 md:right-16 bottom-0 md:block hidden"
            />

            {/* bottom */}
            <div className="flex flex-row justify-between items-center w-full lg:px-16 md:px-8 px-5 z-10">

                {/* play store button */}
                <div className="flex lg:flex-row flex-col gap-5 ">
                    <Link href='https://www.apple.com/in/app-store/'
                        className="store_btn"
                        target="_blank"
                    >
                        <AiFillApple className=" lg:w-8 lg:h-8 md:w-6 md:h-6 text-new_green" />
                        <p>app store</p>
                    </Link>
                    <Link
                        href='https://play.google.com/store/search?q=cash%20app&c=apps&hl=en-IN'
                        target="_blank"
                        className="store_btn"
                    >
                        <BsGooglePlay className=" lg:w-7 lg:h-7 md:w-6 md:h-6 text-new_green" />
                        <p>google play</p>
                    </Link>
                </div>

                {/* MID arrow */}
                <button>
                    <BsArrowDown className=" w-9 h-9 text-new_green" />
                </button>
                <div className="flex flex-col md:flex-row gap-5 items-center">


                    <p className="font-Mulish text-ss  leading-3 lg:w-[22rem] text-new_gray mr-4 lg:flex hidden">
                        Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.

                    </p>
                    <div className="flex md:flex-row flex-col md:gap-7.5 gap-4" >
                        <Link href='https://www.twitch.tv/' target='_blank'>
                            <BsTwitch className='w-6 h-6' />
                        </Link>

                        <Link href='https://twitter.com/' target='_blank'>
                            <BsTwitter className='w-6 h-6' />
                        </Link>

                        <Link href='https://www.instagram.com/' target='_blank'>
                            <BsInstagram className='w-6 h-6' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}