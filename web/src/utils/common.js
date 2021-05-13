export const nameSplitter = (fullName = "") => {
  const nameParts = fullName.split(" ");
  return {
    first: nameParts[0],
    last: nameParts.length > 1 ? fullName.split(`${nameParts[0]} `)[1] : "",
  };
};
