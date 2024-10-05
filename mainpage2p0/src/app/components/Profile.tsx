import Image from 'next/image'
import styles from './bio.module.css'

export default function Profile() {
    return (
        <>
            <div className={styles.profile}>
                <Image 
                    src="/images/profile.jpeg"
                    className={styles.profilePhoto}
                    width={350}
                    height={350}
                    alt="Picture of the author"
                />
                <p className={styles.biotext}>
                    I'm Ken. I love building, fixing and iteratively improving complex systems.
                        I like understanding systems: in organizations this means people and communication styles, 
                        in programming this means the usage and transformation of data. 
                    
                    <br></br><br></br>
                    I'm a graduate of Swarthmore College with a BA in Mathematics and Computer Science. 
                        I've spent a lot of time using computers to do math, and using math to talk about computers. 
                        Now I apply that same reasoning to the software engineering world, creating useful and efficient abstraction for development, and tools for expression. 
                        Please reach out to me for any reason!
                    
                </p>
            </div>
        </>
    );
}

function ProfileText() {
    return (
        <div>
          <p>I'm Ken. I love building, fixing and iteratively improving complex systems.
            I like understanding systems: in organizations this means people and communication styles, 
            in programming this means the usage and transformation of data. 
          </p>
          <p>I'm a graduate of Swarthmore College with a BA in Mathematics and Computer Science. 
            I've spent a lot of time using computers to do math, and using math to talk about computers. 
            Now I apply that same reasoning to the software engineering world, creating useful and efficient abstraction for development, and tools for expression. 
            Please reach out to me for any reason!
          </p>
        </div>
    )
}