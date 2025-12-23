import { BridgeSurface} from "iconoir-react";

const styles = {fontSize:"4rem",fontFamily:"var(--font-geniric)"}


export default function Logo({children}:{children:React.ReactNode}){
    return(
      <>
         <div className="text-white inset-3      border     text-center  h-20 w-20  rounded-full     font-extrabold  space-x-2 border-spacing-0.5 text-2xl"
         style={styles}>
              <BridgeSurface className="  overflow-hidden h-20 w-20 drop-shadow  drop-shadow-amber-100   animate-fade-down   rounded-full  text-amber-300" /> {children}
         </div>
      </>
    )
}