import React, { useEffect, useRef, useState } from 'react';

const CarouselRight: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more images as needed
    ];

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseEnter = () => {
        stopAutoSlide();
    };

    const handleMouseLeave = () => {
        startAutoSlide();
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div
            className="carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={carouselRef}
        >
            <button onClick={handlePrevClick}>Prev</button>
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default CarouselRight;