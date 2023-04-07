import React from "react";

const Friend =({ring}) =>{
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><big>Ring: Diamond</big></p>}
        </div>
    );
};

export default Friend;