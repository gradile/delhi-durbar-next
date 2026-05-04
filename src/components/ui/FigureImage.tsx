import Image from "next/image";

type FigureImageProps = {
    src: string;
    alt: string;
    caption?: React.ReactNode;
    width?: number;
    height?: number;
    className?: string;
};

export function FigureImage({
    src,
    alt,
    caption,
    width,
    height,
    className,
}: FigureImageProps) {
    return (
        <figure className={`figure-image ${className || ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="content-image"
            />
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}