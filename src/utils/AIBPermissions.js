export const pLocaion = () => {
  Permissions.request('location').then(response => {
    alert(JSON.stringify(response));
  });
};
