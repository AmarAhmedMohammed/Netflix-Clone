import React from 'react'
import Row from '../Row/Row'
import request from '../../../request.jsx'
function RowList() {
  return (
    <div>
        <Row title="ANIMATION MOVIES" fetchUrl={request.fetchAnimationMovies} isPoster={true}/>
        <Row title="TRENDING MOVIES" fetchUrl={request.fetchAnimationMovies}/>
        <Row title="ACTION MOVIES" fetchUrl={request.fetchAnimationMovies}/>
        <Row title="COMMEDY MOVIES" fetchUrl={request.fetchAnimationMovies}/>
        <Row title="HORROR MOVIES" fetchUrl={request.fetchAnimationMovies}/>
        <Row title="FAMILY MOVIES" fetchUrl={request.fetchAnimationMovies}/>
        <Row title="SCINCE FICTION" fetchUrl={request.fetchAnimationMovies}/>
    </div>
  )
}

export default RowList