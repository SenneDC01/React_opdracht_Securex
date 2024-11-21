export const loginUser = async (username) => {
  try {
    console.log("login User", username);
    const response = await fetch(
      `http://localhost:8080/api/admin/users/${username}`,
    );
    if (!response.ok) {
      throw new Error("Invalid username");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
