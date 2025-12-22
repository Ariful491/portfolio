
export default function MarqueeIconBox({children}: { children: React.ReactNode }) {
    return (
        <>
            <div
                className="bg-white w-full flex  justify-center items-center gap-2 font-bold m-1 p-3 rounded-lg  text-gray-600  text-lg

                                      animate-fade   duration-1000   animate-ease-in-out  animate-once ">

                {children}
            </div>
        </>
    )
};