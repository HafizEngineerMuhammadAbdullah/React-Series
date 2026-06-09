import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
    return (
        <div className="px-18 pb-10 pt-6 h-[90vh] bg-white flex items-center gap-10">
            <LeftContent />
            <RightContent users={props.users}/> 
        </div>
    );
}

export default Page1Content;