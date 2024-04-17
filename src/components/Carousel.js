import React, { useRef, useState, useEffect } from 'react';

const Carousel = ({ children }) => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const [clientWidth, setClientWidth] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (carouselRef.current) {
                setMaxScrollWidth(carouselRef.current.scrollWidth);
                setClientWidth(carouselRef.current.clientWidth);
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const newPosition = Math.max(scrollPosition - 199, 0);
            carouselRef.current.scrollLeft = newPosition;
            setScrollPosition(newPosition);
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const newPosition = Math.min(scrollPosition + 199, maxScrollWidth - clientWidth);
            carouselRef.current.scrollLeft = newPosition;
            setScrollPosition(newPosition);
        }
    };

    return (
        <div className="my-container partner-carousel-wrapper">
            <div ref={carouselRef} className="partner-carousel" onScroll={() => setScrollPosition(carouselRef.current.scrollLeft)}>
                {children}
            </div>
            <button 
                className="partner-prev partner-arrow btn-left"
                onClick={scrollLeft}
                style={{ visibility: scrollPosition > 0 ? 'visible' : 'hidden' }}
                aria-label="Scroll left"
            >
            </button>
            <button 
                className="partner-next partner-arrow btn-right"
                onClick={scrollRight}
                style={{ visibility: scrollPosition < maxScrollWidth - clientWidth ? 'visible' : 'hidden' }}
                aria-label="Scroll right"
            >
            </button>
        </div>
    );
};

export default Carousel;
