import { combineReducers } from 'redux';
import { propertyOwner as propertyTree } from './propertyTree';
import { connection } from './connection';
import { shortcuts } from './shortcuts';

// Add more reducers here
const openspaceApp = combineReducers({
  propertyTree,
  shortcuts,
  connection,
});

export default openspaceApp;
