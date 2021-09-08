import React,{useState} from 'react';

function ReadMore({children}){
    const text=children;
    const [istruncated,setIstrucated]=useState(true);

    const resultString=istruncated? text.slice(0,330):text;

    return(
        <>
            <p>
                {resultString}
            </p>
            {
                text.length>320?
                <span 
                    className="btn btn-info"
                    onClick={()=>{setIstrucated(!istruncated)}}
                >
                    {istruncated?'Read More':'Read Less'}
                </span>
                :null
            }
        </>
    );
}

export default ReadMore;

