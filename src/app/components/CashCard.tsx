import Image from "next/image";

export default function CashCard() {

    const boostStairs1 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998799/Mercor/card/boost-stairs-1_x4hbsw.svg';
    const boostStairs2 = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998799/Mercor/card/boost-stairs-2_phzijf.svg';
    const boostCoffee = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-coffee_p0wewa.svg';
    const boostCard = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-card_brdqr9.svg';
    const boostPhone = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-phone_pbn1pl.svg';
    const boostShoe = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-shoe_j9jwok.svg';
    const boostBurger = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-burger_hqh16h.svg';
    const BoostHand = 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690998797/Mercor/card/boost-hand_jpis4o.svg';

    return (
        <div className=" min-h-screen flex flex-col bg-black w-full relative">

            {/* Right side items */}
            <div className="flex absolute bottom-0 right-0">

                {/* Boost Hand */}
                <Image
                    src={BoostHand}
                    height={100}
                    width={100}
                    alt="boost hand"
                    className=" shrink-0 absolute md:w-20 w-10 lg:top-[11.2%] 
                    md:top-[9.5%] md:right-[21%] right-[18%] top-[8%]"
                />

                {/* boost Shoe */}
                <Image
                    src={boostShoe}
                    height={100}
                    width={100}
                    alt="boost Shoe"
                    className=" shrink-0 absolute md:w-24 w-10 md:bottom-[35.5%] 
                    md:right-[2.5%] right-[2%] bottom-[35%]"
                />

                {/* boost Coffee */}
                <Image
                    src={boostCoffee}
                    height={100}
                    width={100}
                    alt="boost Coffee"
                    className=" shrink-0 absolute md:w-20 w-10 md:bottom-[16.5%]
                     md:right-[33%] bottom-[16%] right-[32%]"
                />

                {/* boost Card */}
                <Image
                    src={boostCard}
                    height={100}
                    width={100}
                    alt="boost Card"
                    className=" shrink-0 absolute md:w-20 w-8 bottom-[55%] right-[33%] "
                />

                {/* boost Burger */}
                <Image
                    src={boostBurger}
                    height={100}
                    width={100}
                    alt="boost Burger"
                    className=" shrink-0 absolute md:w-20 w-10 bottom-[35%] right-[43.5%] "
                />

                {/* boost Phone */}
                <Image
                    src={boostPhone}
                    height={100}
                    width={100}
                    alt="boost Phone"
                    className=" shrink-0 absolute md:w-60 w-24 bottom-[12.9%] right-[61%] "
                />

                {/* Right side big stair */}
                <Image
                    src={boostStairs1}
                    height={100}
                    width={100}
                    alt="boost Stairs1 right side"
                    className=" shrink-0 md:w-[54.85rem] w-96"
                    
                />
            </div>

            {/* left side stair */}
            <Image
                src={boostStairs2}
                height={200}
                width={100}
                alt="boost Stairs2 left side"
                className="absolute shrink-0 lg:w-[25rem] lg:bottom-0 left-0 lg:block hidden"
            />
            <Image
                src={boostStairs2}
                height={200}
                width={100}
                alt="boost Stairs2 left side"
                className="absolute shrink-0 md:w-[25rem] w-60 lg:hidden block md:top-[-7rem] top-[-4.15rem] left-0 rotate-90"
            />

            <div className="flex flex-col gap-1 lg:w-80 absolute lg:left-1/4 lg:top-1/4 md:left-1/4 md:top-[20%] top-[30%] md:w-[25rem] lg:text-left text-center">
                <h1 className="font-extrabold md:text-[2.5rem] text-3xl md:leading-10 text-new_green md:tracking-wider">Cash Card & Boost</h1>
                <p className="text-white font-Mulish md:text-base text-sm font-normal md:tracking-sm md:mx-0 mx-7">
                    The Cash Card is a free, customizable debit card that lets you pay online and in stores.
                     It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
                </p>

            </div>
        </div>
    );
}