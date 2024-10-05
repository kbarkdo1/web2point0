import backgroundPic from "../assets/headerBackground.png"
import style from "./header.module.css"
import Image from 'next/image'
interface HeaderProps {
    logo?: any;
}

export default function Header(props: HeaderProps) {
    return (
        <>
        <div>
        <Image
            src="/images/headerBackground.png"
            width={3986}
            height={900}
            alt="mountain valley panorama"
        />
        </div>
        
      <h1 className={style.headerText}>Welcome!</h1>
      </>

    )
}