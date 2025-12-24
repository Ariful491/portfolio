

export default function SidebarLink({children}) {
    return (
        <>
            <a
               className="rounded-lg bg-gray-100  text-gray-800 font-extrabold  group flex w-[280px]    py-[.5rem]   justify-center items-center space-x-2  ">
                {children}
            </a>
        </>
    )
}