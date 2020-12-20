import {Alert} from 'react-native';

const handleError = (status, body) => {
  if (status >= 500) {
    //Alert.alert('', 'Somethings Went Wrong');
  } else if (status >= 400 && status < 500) {
    // serverErrors(body);
  }
};
function serverErrors(body) {
  var error = '';
  if (Array.isArray(body)) {
    for (let err of body) {
      console.log(err);
      err = JSON.stringify(err);
      error = error + err + '\n';
    }
  } else {
    error = body.toString();
  }
  Alert.alert('', error);
}
export default (ErrorHandler = {
  handleError,
});
