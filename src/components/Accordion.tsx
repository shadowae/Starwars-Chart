import React, { useState, useRef } from "react";
import './Accordion.css';

interface AccordionProps {
    header: string;
    content: any;
}

const Accordion = (props: AccordionProps) => {
    const { header, content } = props;
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    
    const handleToggle = () => {
        setOpen(!open);
    };
    
    return (
        <div className={'accordion-main'}>
            <div className="accordion-header" onClick={handleToggle}>
                {header}
            </div>
            <div
                className={`accordion-content ${
                    open ? "accordion-content-open" : "accordion-content-closed"
                }`}
                ref={contentRef}
                style={open ? { height: contentRef.current?.scrollHeight } : undefined}
            >
                {content}
            </div>
        </div>
    );
};

export default Accordion;
