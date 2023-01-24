interface UserRegisterDataTypes {
  name: string;
  password: string;
  email: string;
}

export const registerUser = async (userData: UserRegisterDataTypes) => {
  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  return data;
};
