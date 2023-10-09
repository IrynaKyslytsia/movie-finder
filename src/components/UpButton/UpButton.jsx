import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Icon } from './UpButton.styled';

const UpButton = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {backToTop && (
                <Button onClick={scrollUp}>
                    <Icon />
                </Button>
            )}
        </>
    );
};

export default UpButton;