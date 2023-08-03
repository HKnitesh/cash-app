import Image from "next/image";
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay, BsArrowDown, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Investing() {

    const stockPhone = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1691045685/Mercor/investing/investing-stocks_xqkfnh.svg';
    const bitcoinPhone = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1691045685/Mercor/investing/investing-bitcoin_ui0wf7.svg';
    const rightGreenGraph = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1691045686/Mercor/investing/investing-graph-3_1_pula2u.svg';
    const rightWhiteGraph = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1691045687/Mercor/investing/investing-graph-2_k2x6gd.svg';
    const leftGraph = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1691045686/Mercor/investing/investing-graph-1_x47vu4.svg';

    return (
        <div className="min-h-screen flex flex-col w-full relative">

            <div className="flex  flex-row  absolute lg:text-left text-center lg:mx-60 md:mx-20 mx-2 lg:top-60 md:top-44 top-14 justify-between font-Mulish font-normal text-black">
                {/* Stocks */}
                <div className="flex flex-col lg:w-1/4 lg:gap-2 md:gap-1 w-5/12">
                    <h2 className="font-black lg:text-2xl md:text-3xl text-xl  tracking-widest">Stocks</h2>
                    <p className="md:text-base tracking-sm text-xs">
                        Whether you’re an expert or just getting
                        started, Cash App is the fastest and most
                        accessible way to invest in stocks. Start
                        now with as little as $1.
                    </p>
                </div>

                {/* Bitcoin */}
                <div className="flex flex-col lg:w-1/4 lg:gap-2 md:gap-1 w-5/12">
                    <h2 className="font-black lg:text-2xl md:text-3xl text-xl  tracking-widest">Bitcoin</h2>
                    <p className="md:text-base tracking-sm text-xs">
                        Cash App is the fastest way to convert
                        dollars to bitcoin. From your home screen,
                        six taps are all it takes to stack sats,
                        buy an entire bitcoin, or just see what
                        it’s all about.
                    </p>
                </div>
            </div>

            <div className="flex h-[65vh] bgi-invT justify-center ">
                <h1 className="md:text-5xl text-3xl font-extrabold tracking-wider lg:mt-32 md:mt-20 mt-3">
                    Investing
                </h1>

            </div>

            <div className="flex flex-row absolute lg:gap-10 md:gap-40 gap-20 top-[35%] lg:right-[37.5%] md:right-[13.8%] right-10 z-10">

                {/* stock Phone */}
                <Image
                    src={stockPhone}
                    height={100}
                    width={100}
                    alt="stock Phone"
                    className=" shrink-0 lg:w-40 lg:h-80 md:w-52"
                />

                {/* BitCoin Phone */}
                <Image
                    src={bitcoinPhone}
                    height={100}
                    width={100}
                    alt="BitCoin Phone"
                    className=" shrink-0 lg:w-40 lg:h-80 md:w-52"
                />
            </div>

            <div className="flex h-[35vh] bgi-invB relative">

                {/* bottom */}
                <div className="absolute bottom-4 flex flex-row justify-between items-center w-full lg:px-16 md:px-12 px-5 z-10">

                    {/* play store button */}
                    <div className="flex md:flex-row flex-col gap-5 ">
                        <Link href='https://www.apple.com/in/app-store/'
                            className="investingStoreBtn"
                            target="_blank"
                        >
                            <AiFillApple className=" lg:w-8 lg:h-8 md:w-6 md:h-6 text-new_green" />
                            <p>app store</p>
                        </Link>
                        <Link
                            href='https://play.google.com/store/search?q=cash%20app&c=apps&hl=en-IN'
                            target="_blank"
                            className="investingStoreBtn"
                        >
                            <BsGooglePlay className=" lg:w-7 lg:h-7 md:w-6 md:h-6 text-new_green" />
                            <p>google play</p>
                        </Link>
                    </div>


                    <div className="flex flex-col md:flex-row gap-5 items-center">


                        <p className="font-Mulish text-ss  leading-3 lg:w-[22rem] text-[#606060] mr-4 lg:flex hidden">
                            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.

                        </p>
                        <div className="flex md:flex-row flex-col md:gap-7.5 gap-4 text-black" >
                            <Link href='https://www.twitch.tv/' target='_blank' className="hover:text-new_green">
                                <BsTwitch className='w-6 h-6 ' />
                            </Link>

                            <Link href='https://twitter.com/' target='_blank' className="hover:text-new_green">
                                <BsTwitter className='w-6 h-6' />
                            </Link>

                            <Link href='https://www.instagram.com/' target='_blank' className="hover:text-new_green">
                                <BsInstagram className='w-6 h-6' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Left Graph image */}
            <Image
                src={leftGraph}
                height={100}
                width={100}
                alt="left graph"
                className="absolute shrink-0 lg:w-[45rem] lg:h-[14rem] md:left-0 
                lg:bottom-10 md:w-[22rem] md:bottom-20 w-52 bottom-24"
            />

            {/* right White Graph */}
            <Image
                src={rightWhiteGraph}
                height={100}
                width={100}
                alt="right White Graph"
                className="absolute shrink-0 lg:w-[22rem] lg:h-[10rem] md:right-0 md:bottom-52 md:w-[12rem] md:block hidden "
            />

            {/* rightGreenGraph*/}
            <Image
                src={rightGreenGraph}
                height={100}
                width={100}
                alt="right Green Graph"
                className="absolute shrink-0 lg:w-[25rem] lg:h-[13rem] right-0 
                md:bottom-14 md:w-[20rem] w-40 bottom-28"
            />

        </div>
    );
}