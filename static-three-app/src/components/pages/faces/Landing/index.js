import Image from 'next/image'
import me from '/public/pictures/me.png'

const Landing = () => (
    <div className='flex flex-col'>
        <Image src={me} alt="Dan" width="250" height="250" />
        <h1>Daniel Allott</h1>
    </div>
)

export default Landing;