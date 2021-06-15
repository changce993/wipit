export const QUERY_STRINGS = {
  username: '?username=',
  task: '?task='
};

export const QUERY_USERNAME = window.location.search.includes(QUERY_STRINGS.username);
export const QUERY_TASK = window.location.search.includes(QUERY_STRINGS.task);

export const SIDEBAR_OPTIONS = {
  editProfile: 'EDIT_PROFILE',
  login: 'LOGIN',
  signup: 'SIGNUP',
  newTask: 'NEW_TASK',
  task: 'TASK',
  rating: 'RATING',
  userProfile: 'userProfile',
  profile: 'profile'
};