export const getEmployees = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/employees");
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAssets = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/assets");
    if (!response.ok) {
      throw new Error("Failed to fetch assets");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const assignAssetToUser = async (assetId, userId) => {
  try {
    const response = await fetch(
      `https://your-api.com/assets/${assetId}/assign`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assignedTo: userId }),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to assign asset");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
