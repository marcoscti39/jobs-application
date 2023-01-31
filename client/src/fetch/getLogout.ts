export const getLogOut = async () => {
  const response = await fetch("http://localhost:3000/user-logout", {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  console.log(data);
  return data;
};
