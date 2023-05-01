import Image from 'next/image'
import me from '/public/pictures/me.png'
import { H1 } from '../../../Text'
import goToPage from '@/utils/goToPage'

const Landing = ({contactPage}) => (
    <div className='flex flex-col items-center'>
        <Image src={me} alt="Dan" width="250" height="250" />
        <H1>Daniel Allott</H1>
        <H1>Front End Developer</H1>
        <button className='underline' onClick={()=> goToPage(contactPage)}>
            <H1>Contact me</H1>
        </button>
    </div>
)

export default Landing;