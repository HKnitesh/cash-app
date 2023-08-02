
import Image from "next/image"

export default function Payments() {
    const paymentsPhone = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690967974/Mercor/payments-phone_1_n6cpgm.svg'
    const pillarSmall = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690968049/Mercor/payments-pillar-small_xyaczd.svg';
    const pillarMedium = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690967869/Mercor/payments-pillar-medium_pm4u6b.svg';
    const pillarMedium00 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690977178/Mercor/payments-pillar-medium00_yespsh.svg';
    const pillarLarge = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690968022/Mercor/payments-pillar-large_fme6wp.svg';
    const paymentsColumn01 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690967851/Mercor/payments-column_bjffjn.svg';
    const paymentsColumn02 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690973048/Mercor/payments-column2_q4lkmj.svg';
    const paymentsColumn03 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690975924/Mercor/payments-column03_nyuagh.png';

    return (
        <div className=" min-h-screen flex flex-col items-center justify-center bg-white text-black relative w-full">

            {/* Phone */}
            <Image
                src={paymentsPhone}
                height={100}
                width={100}
                alt="paymentsPhone"
                className="z-10 absolute md:w-[45.875rem] w-96 "
            />

            {/* right side column */}
            <Image
                src={paymentsColumn01}
                height={100}
                width={100}
                alt="payments-column01"
                className="z-10 absolute w-[44rem]  right-0 bottom-10 "
            />
            {/* left side pillar */}
            <Image
                src={pillarMedium}
                height={100}
                width={100}
                alt="pillarMedium"
                className="z-10 absolute md:w-40 md:h-60 md:right-52 md:bottom-36 md:block hidden"
            />
            <Image
                src={pillarLarge}
                height={100}
                width={100}
                alt="pillarLarge"
                className="z-10 absolute md:w-52 md:h-80 md:right-[37rem] md:bottom-20 lg:block hidden "
            />

            {/* mid column */}
            <Image
                src={paymentsColumn02}
                height={100}
                width={100}
                alt="payments-column2"
                className="z-20 absolute md:w-[50rem] right-64 bottom-0 lg:block hidden"
            />
            {/* middle medium pillar 00 */}
            <Image
                src={pillarMedium00}
                height={100}
                width={100}
                alt="pillarMedium02"
                className="z-10 absolute md:w-40 md:h-60 lg:right-[38.5rem] md:left-28 md:z-20 md:bottom-0 md:block hidden"
            />
            {/* pillar */}
            <Image
                src={pillarMedium}
                height={100}
                width={100}
                alt="pillarMedium03"
                className="z-30 absolute md:w-40 md:h-60 md:right-[48rem] md:bottom-8 md:block hidden"
            />

            {/* Left side Column */}
            <Image
                src={paymentsColumn03}
                height={100}
                width={100}
                alt="payments-column3"
                className="z-10 absolute md:w-44 left-0 bottom-0 "
            />

            {/* right Small pillar */}
            <Image
                src={pillarSmall}
                height={100}
                width={100}
                alt="pillarSmall"
                className="z-10 absolute md:w-32 md:h-32 lg:left-[21rem] lg:bottom-28 md:left-40 md:bottom-52 md:block hidden"
            />
            {/* right side medium pillar */}
            <Image
                src={pillarMedium}
                height={100}
                width={100}
                alt="pillarMedium03"
                className="z-10 absolute md:w-40 md:h-60 md:left-60 md:bottom-12 md:block hidden"
            />

            {/* Payment text */}
            <div className="flex flex-col lg:w-[22rem] md:w-3/5 mx-5 absolute lg:top-44 lg:left-80 md:top-14 top-4">
                <h1 className=" text-new_green md:text-[2.5rem] text-4xl font-extrabold ">Payments</h1>
                <p className=" font-Mulish md:text-base text-sm font-normal tracking-sm">
                    Send and receive money with anyone, donate  to an important cause, or tip professionals.
                    Just enter a $cashtag, phone number, or
                    scan their  QR code to pay.</p>
            </div>
            <div className="flex flex-col w-full bottom-5 absolute border-2 border-solid border-black/30 lg:h-72 md:h-[30rem] h-52">
                <hr className="hr_border lg:mt-5 md:mt-10 md:block hidden" />
                <hr className="hr_border lg:mt-9 md:mt-20 md:block hidden" />
                <hr className="hr_border lg:mt-11 md:mt-24 md:block hidden" />
                <hr className="hr_border lg:mt-18 md:mt-32 md:block hidden" />
            </div>


        </div>
    )
}