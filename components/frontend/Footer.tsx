export default function Footer() {
    return (
        <footer className=" md:ml-[300px]">
             <div className="bg-white text-gray-600  py-6 mt-10 mb-5">
                 <div className="container mx-auto px-4 text-center">
                     <p className="text-sm">&copy; {new Date().getFullYear()} <span className={`font-extrabold `}>Ariful Hoque</span>. All rights reserved.</p>
                 </div>
             </div>
        </footer>
    )
}