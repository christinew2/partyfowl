import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./SearchResults.module.css";
import SearchResultsMap from "../../components/SearchResultFeed/SearchResultsMap";

//Services
import { getEventsByPostalCode } from "../../services/ticketmasterAPI";

//Components
import Feed from "../../components/Feed/Feed";

const SearchResults = ({ user }) => {
  const zipcode = 80202;
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEventsByPostalCode(100, zipcode).then((data) => {
      console.log(data, "getAllEvents data");

      // const newArray = data?._embedded?.events?.map((event, index) => {
      //   if(event._embedded.venues[0]) {
      //     return event
      //   }   
      //   return
      // })

      // setEventData(newArray)

      data.hasOwnProperty("_embedded")
        ? setEventData(data._embedded.events)
        : setEventData([]);
    });

  }, []);

  return (
    <main className={styles.container}>
      <div>
        <h1 className="landing-h1">Search Results</h1>

        <SearchResultsMap eventData={eventData} />
      </div>
    </main>
  );
};

export default SearchResults;