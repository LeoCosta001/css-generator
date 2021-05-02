import { combineReducers } from 'redux';

// Reducers
import textView from './text-view.reducer';
import textAppProperty from './text-app-property.reducer';

export default combineReducers({
    textView,
    textAppProperty
});
