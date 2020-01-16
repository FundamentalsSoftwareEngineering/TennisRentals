import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { tennisCourts } from './tennisCourts.reducer';
import { tennisTables } from './tennisTables.reducer';
import { reservations } from './reservation.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  tennisCourts,
  reservations,
  tennisTables,
});

export default rootReducer;