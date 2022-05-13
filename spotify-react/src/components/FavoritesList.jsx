
import { Container, Row, Col, ListGroup, ListGroupItem ,Badge  } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromFavouriteSongs } from '../slice/favouriteSongs/favouriteSongSlice'

const mapStateToProps = (state) => ({
    state  : state
})

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromFavourite: (songId) => dispatch(removeFromFavouriteSongs(songId))
    }
}



 const FavoritesList = (state, removerfromFavourite) => {
  return (
    <div>
         <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {favouriteSongs.song.map((song, i) => (
                <ListGroupItem key={i}>
                  <Badge
                     variant="danger"  onClick={() => removeFromFavourite(song.id)}
                  >Remove</Badge>                
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
