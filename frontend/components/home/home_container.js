import { connect } from 'react-redux';
import HomePage from './home';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchHomePhotos } from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  photos: selectUserPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchHomePhotos: () => dispatch(fetchHomePhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
