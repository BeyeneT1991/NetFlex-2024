import React from "react";
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

const RowList = () => {
    return(
    <> 
    <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
        <Row title="Trending New" fetchUrl={requests.fetchTrending} />
    </>
    )
}

export default RowList;
