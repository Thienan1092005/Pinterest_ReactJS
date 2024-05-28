export const validate = (email, pass, rePass) => {
  if (email === "" || pass === "" || rePass === "" || pass !== rePass) {
    console.log("sai");
    return false;
  } else {
    console.log("dung");
    return true;
  }
};
