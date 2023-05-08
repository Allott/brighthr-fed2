import { H1, H2 } from '../../../Text'

const Landing = () => (
    <div className='flex flex-col items-center'>
        <H1>Contact Me</H1>
        <H2 underline>07419117333</H2>
        <a href='mailto:daniel@llott.co.uk' target="_blank" type='link' className='z-50'>
            <H2 underline>daniel@llott.co.uk</H2>
        </a>
        <a href='https://github.com/Allott' target="_blank" type='link' className='z-50'>
            <H2 underline>Github</H2>
        </a>
        <a href='https://www.linkedin.com/in/daniel-allott-477783184/' target="_blank" type='link' className='z-50'>
            <H2 underline>Linkedin</H2>
        </a>
    </div>
)

export default Landing;