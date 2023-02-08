import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Searchbox() {

    return(
        <div className='search-box'>
            <div style={{paddingLeft: "10px",paddingTop:"5px"}}><SearchIcon/></div>
            <div style={{paddingLeft: "15px",paddingTop:"5px"}}>Search</div>

        </div>
    );

}

export default Searchbox;