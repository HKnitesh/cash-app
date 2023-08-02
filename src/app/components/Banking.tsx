import Image from "next/image";

export default function Banking() {

    const bankingHoleTop = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985691/Mercor/Banking/banking-hole_kikfqz.svg';
    const bankingHoleDown = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985691/Mercor/Banking/banking-hole_1_vn5nhw.svg';
    const bankingCubes = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985693/Mercor/Banking/banking-cubes_rm66k1.svg';
    const bankingMonsters = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985692/Mercor/Banking/banking-monster_seqs0y.svg';
    const bankingTrack01mid = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985692/Mercor/Banking/banking-track-1_drb4eo.svg';
    const bankingTrack02top = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985691/Mercor/Banking/banking-track-2_zcfj9t.svg';
    const bankingPhone = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985693/Mercor/Banking/banking-phone_raukxm.svg';
    const bankingRamp01 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985692/Mercor/Banking/banking-ramp-1_fkkckc.svg';
    const bankingRamp02 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985692/Mercor/Banking/banking-ramp-2_kdfgpj.svg';
    const bankingStairRight = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985691/Mercor/Banking/banking-stairs-1_npjk9v.svg';
    const bankingStairLeft = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985690/Mercor/Banking/banking-stairs-2_cplndo.svg';
    const bankingTube = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985691/Mercor/Banking/banking-tube_ml7zjj.svg';
    const bankingColumn = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690985689/Mercor/Banking/banking-column_ketjxt.svg';

    return (
        <div className=" min-h-screen flex flex-col items-center justify-center bg-new_green w-full relative">

            {/* Banking Hole at Top */}
            <Image
                src={bankingHoleTop}
                height={100}
                width={100}
                alt="Banking Hole at Top"
                className="absolute lg:w-96 md:w-72 w-40 shrink-0 top-0 left-0 "
            />

            {/* Banking Hole at Down */}
            <Image
                src={bankingHoleDown}
                height={100}
                width={100}
                alt="Banking Hole at Down"
                className="absolute lg:w-96 md:w-72 w-52 right-8 shrink-0 bottom-0 md:right-64"
            />

            {/* Banking Column */}
            <Image
                src={bankingColumn}
                height={100}
                width={100}
                alt="Banking Column"
                className="absolute  md:w-32 w-20 shrink-0 md:top-[6.56rem] lg:left-[4.63rem] md:left-12 top-8 left-5"
            />

            {/* Banking Track 01 at mid */}
            <Image
                src={bankingTrack01mid}
                height={100}
                width={100}
                alt="Banking Track 1 at mid"
                className="absolute lg:w-[16.875rem] md:w-56 shrink-0 lg:top-36 lg:left-[27rem] 
                md:top-96 md:left-20 md:block hidden "
            />

            {/* Banking Track 02 at Top */}
            <Image
                src={bankingTrack02top}
                height={100}
                width={100}
                alt="Banking Track 02 at Top"
                className="absolute md:w-60 shrink-0 md:top-4 
                lg:right-44 md:right-12 w-40 top-2 right-10"
            />

            {/* Banking Ramp01 */}
            <Image
                src={bankingRamp01}
                height={100}
                width={100}
                alt="Banking Ramp01"
                className="absolute lg:w-[17.5rem] md:w-60 shrink-0 lg:top-48
                 lg:right-[20.5rem] md:top-96 md:right-10 md:flex hidden"
            />

            {/* Banking Ramp02 */}
            <Image
                src={bankingRamp02}
                height={100}
                width={100}
                alt="Banking Ramp02"
                className="absolute md:w-[18.75rem] shrink-0 md:bottom-11 md:left-40
                 lg:block hidden"
            />

            {/* Banking Phone */}
            <Image
                src={bankingPhone}
                height={100}
                width={100}
                alt="Banking Phone"
                className="md:w-[21.875rem] z-10 w-48"
            />

            {/* Banking Stair Left */}
            <Image
                src={bankingStairLeft}
                height={100}
                width={100}
                alt="Banking Stair Left"
                className=" absolute md:w-20 md:bottom-28 md:left-14 w-20 bottom-5 left-5"
            />

            {/* Banking Stair Right */}
            <Image
                src={bankingStairRight}
                height={100}
                width={100}
                alt="Banking Stair Right"
                className=" absolute md:w-24 md:bottom-44 lg:right-32 md:right-20 md:block hidden"
            />

            {/* Banking Tube */}
            <Image
                src={bankingTube}
                height={100}
                width={100}
                alt="Banking Tube"
                className=" absolute md:w-40 bottom-0 md:left-[30.6rem] lg:block hidden"
            />

            {/* Banking Monsters */}
            <Image
                src={bankingMonsters}
                height={100}
                width={100}
                alt="Banking Monsters"
                className=" absolute md:w-[7.5rem] md:bottom-12 md:right-16  bottom-14 right-6"
            />

            {/* Banking Cubes */}
            <Image
                src={bankingCubes}
                height={100}
                width={100}
                alt="Banking Cubes"
                className=" absolute lg:w-60 md:w-72 md:bottom-24 lg:right-[21rem] w-40 bottom-24"
            />

            <div className="flex flex-col md:gap-2 lg:items-start items-center lg:text-left text-center md:w-80 w-4/5 lg:left-80 lg:bottom-64 absolute lg:top-72 md:top-40 top-28">
                <h1 className="md:text-[2.5rem] text-2xl font-extrabold leading-10">Banking</h1>
                <p className="text-black md:text-base text-xs font-Mulish font-normal tracking-sm">
                    Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                    and account number.
                </p>
            </div>




        </div>

    );
}