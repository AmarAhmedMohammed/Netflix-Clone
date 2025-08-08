import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
        <Row title="ANIMATION MOVIES" fetchUrl={requests.fetchAnimationMovies}  isLargeRow={true}/>
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ADVENTURE MOVIES" fetchUrl={requests.fetchAdventureMovie} />
        <Row title="SCIENCE FICTION" fetchUrl={requests.fetchScienceFiction} />
        <Row title="FAMILY MOVIES" fetchUrl={requests.fetchFamilyMovies} />
        <Row title="FANTASY MOVIES" fetchUrl={requests.fetchFantasyMovie} />

    </>
  )
}

export default RowList