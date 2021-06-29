import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

export const alert = (msg) => {
  M.toast({ html: msg, displayLength: 7000 });
};
