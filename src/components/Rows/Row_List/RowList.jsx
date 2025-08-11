import React from 'react'
import Row from '../Row/Row'
import request from '../../../request.jsx'
function RowList() {
  return (
    <div>
        <Row title="ANIMATION MOVIES" fetchUrl={request.fetchAnimationMovies} isPoster={true}/>
        <Row title="TRENDING MOVIES" fetchUrl={request.fetchTrending}/>
        <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}/>
        <Row title="COMMEDY MOVIES" fetchUrl={request.fetchComedyMovies}/>
        <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="FAMILY MOVIES" fetchUrl={request.fetchFamilyMovies}/>
        <Row title="SCINCE FICTION" fetchUrl={request.fetchScienceFiction}/>
    </div>
  )
}

export default RowList