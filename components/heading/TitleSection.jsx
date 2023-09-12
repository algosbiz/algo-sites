import React from 'react';
import {dsnCN} from "../../hooks/helper";

function TitleSection({
                          className,
                          classTitle,
                          tag: Tag = 'h2',
                          defaultSpace = true,
                          children,
                          description,
                          classDesc,
                          classDesInner,
                          dirDescription = "before"
                      }) {


    const P = () => description &&
        <p className={dsnCN('sub-heading', classDesc)}><span className={dsnCN(classDesInner)} dangerouslySetInnerHTML={{__html: description}}></span></p>;

    return (
        <>
            <div className={dsnCN("title-heading d-flex flex-column", className, defaultSpace && "mb-70")}>
                <div>
                    {dirDescription === "before" && <P/>}
                    {children && <Tag className={dsnCN(" text-3xl mt-10  title-cap" , classTitle)}>
                        {typeof  children === "function" ? children() : children}
                    </Tag>}
                    {dirDescription === "after" && <P/>}
                </div>
            </div>

        </>

    );
}

export default TitleSection;