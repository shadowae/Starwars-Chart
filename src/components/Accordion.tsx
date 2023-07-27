import React, { useState } from "react";

interface AccordionProps {
    header: string;
    content: any;
}

const Accordion = (props: AccordionProps) => {
    const { header, content } = props;
    const [open, setOpen] = useState(false);
    
    const handleToggle = () => {
        setOpen(!open);
    };
    
    return (
        <div>
            <div className="accordion-header" onClick={handleToggle}>
                {header}
            </div>
            {open && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;
