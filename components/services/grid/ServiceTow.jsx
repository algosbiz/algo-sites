import React from 'react'

import Service from "../Service";
import {getServiceData} from "../../../data/service";


const ServiceTow  = ({className , data, ...restProps}) => {
    const showData = data|| getServiceData();
    return (
        <Service.grid col={2} colTablet={2} colMobile={1}
             className={className} data={showData.slice(0 , 4)} backgroundColor={"background-section"} styleBox={"corner"} {...restProps}
        />
    );
};


export default ServiceTow