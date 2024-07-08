"use client";
import React from 'react';

interface TabItemProps {
    title: string;
    isActive?: boolean; // Make isActive optional
    setActiveTab?: () => void; // Make setActiveTab optional
    children?: React.ReactNode,
}

const TabItem: React.FC<TabItemProps> = ({ title, isActive, setActiveTab, children }) => {
    const handleClick = () => {
        if (setActiveTab) {
            setActiveTab();
        }
    };

    return (

            <button
                className={`${isActive ? 'font-bold border-red-600' : 'font-normal'
                    } py-2 px-4 border-b-4 duration-700 transition-all text-xs`}
                onClick={handleClick} // Call handleClick only if setActiveTab is provided
            >
                {title}
            </button>
 
    );
};

export default TabItem;