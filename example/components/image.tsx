import * as React from "react";
import Image from 'next/image';
import enderImage from '../public/ender-trace-best-small.svg'
import { StyledImage } from "./image.styles";
import { useEffect, useRef } from "react";
import { usePositionsState } from "../hooks/usePositionsState";

interface IImageComponent {
    isTargetElement?: boolean;
}

const ImageComponent: React.FC<IImageComponent> = (props) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const { updateTargetElement, targetElement } = usePositionsState();

    useEffect(() => {
        !!props.isTargetElement && !!imageRef.current && updateTargetElement(imageRef.current);

        return () => {
        }
    }, [imageRef.current]);

    return (
        <StyledImage ref={imageRef} onClick={() => imageRef.current && updateTargetElement(imageRef.current)} isTarget={imageRef.current === targetElement}>
            <Image src={enderImage} layout="responsive"></Image>
        </StyledImage>
    )
}

export default ImageComponent;