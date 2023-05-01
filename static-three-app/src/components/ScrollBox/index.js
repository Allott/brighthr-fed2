import rotationConst from '../../constants/rotationConst'
import useScroll from '@/utils/useScroll/useScroll' 

const { scrollRate } = rotationConst;
const halfPi = Math.PI/2;

const ScrollBox = ({count, children}) => {
    const gap = Math.round(halfPi / scrollRate);
    const height = (count+1) * gap + 80;
    return (
        <div 
            className="relative z-10 flex flex-col items-center" 
            style={{height: `${height}px`, 'margin-top': `${gap}px`}}
            >
            {children}
        </div>
    );
}

const SideBox = ({position, children}) => {
    const scroll = useScroll();
    const top = Math.round(position * (halfPi / scrollRate));
    const opacity = Math.max(100 - Math.abs(scroll - top),0)
    return (
        <div 
            className={`absolute max-w-4xl`} 
            style={{top: top, opacity: `${opacity}%`}}
            >
            {children}
        </div>
    );
}

export {ScrollBox, SideBox}