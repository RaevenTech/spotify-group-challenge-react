
import { Container, Row, Col, ListGroup, ListGroupItem ,Badge  } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromFavouriteSongs } from '../slice/favouriteSongs/favouriteSongSlice'

const mapStateToProps = (state) => ({
    state  : state
})

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromFavourite: (song) => dispatch(removeFromFavouriteSongs(song))
    }
}



 const FavoritesList = (song, removerfromFavourite) => {
  return (
    <div>
         <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {song.map((song, i) => (
                <ListGroupItem key={i}>
                  <Badge
                     variant="danger"  onClick={() => removeFromFavouriteSongs(song.id)}
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
