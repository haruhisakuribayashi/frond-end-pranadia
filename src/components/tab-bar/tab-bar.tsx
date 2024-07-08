"use client";
import React, { ReactElement, ReactNode, useRef, useState } from "react";

interface TabBarProps {
  items: number;
  children: ReactNode;
}

const TabBar: React.FC<TabBarProps> = ({ items, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        className={`grid`}
        style={{
          gridTemplateColumns: `repeat(${items}, minmax(0, 1fr))`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            isActive: index === activeTab,
            setActiveTab: () => setActiveTab(index),
          });
        })}
      </div>

      <div
        className={`transition-all duration-500 space-x-5`}
        style={{
          width: "100%",
          // background: "cadetblue",
          display: "-webkit-inline-box",
          transform: `translateX(-${activeTab * 106}%)`,
        }}
      >
        {React.Children.map(children, (child: ReactNode, index: number) => {
          return (
            <div className="transition-all duration-500 w-full">
              {(child as ReactElement).props.children}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabBar;
