import Image from 'next/image'
import me from '/public/pictures/me.png'
import { H1 } from '../../../Text'
import rotationConst from '../../../../constants/rotationConst'


const { scrollRate } = rotationConst;
const halfPi = Math.PI/2;

const goToContact = (page) => {
    const gap = Math.round(halfPi / scrollRate) * page;
    window.scrollTo({
        top: gap,
        behavior: 'smooth',
    })
}

const Landing = ({contactPage}) => (
    <div className='flex flex-col items-center'>
        <Image src={me} alt="Dan" width="250" height="250" />
        <H1>Daniel Allott</H1>
        <H1>Front End Developer</H1>
        <button className='underline' onClick={()=> goToContact(contactPage)}>
            <H1>Contact me</H1>
        </button>
    </div>
)

export default Landing;