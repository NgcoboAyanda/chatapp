import React, {ReactNode} from 'react';

import './SVG.css';

interface SVGProps {
    height: number,
    width: number,
    icon: ReactNode
}

const SVGIcon = ({height, width, icon} : SVGProps) => {

    return (
        <div className="svg-icon" style={{height, width}}>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default SVGIcon;