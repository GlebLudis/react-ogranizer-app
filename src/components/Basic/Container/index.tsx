import React from 'react';
import './styles.css';

/**
 * Constrains and horizontally centers content
 */

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={[className, 'container'].join(' ')}>
            { children }
        </div>
    )
}

export default Container;
