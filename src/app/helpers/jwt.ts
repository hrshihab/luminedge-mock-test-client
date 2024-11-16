// jwt.ts
import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  userId: string;
  role: string;
  [key: string]: any;  // for other potential payload properties
}

export const getUserIdFromToken = () => {
  // Ensure that the code runs only on the client side
  if (typeof window === "undefined" || !window.localStorage) {
    return null; // If running server-side or localStorage is not available
  }

  // Access the localStorage on the client side
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("No access token found in localStorage.");
    return null; // No token found
  }

  // Decode the token with type
  const decoded = jwtDecode<CustomJwtPayload>(accessToken);
  //console.log("decoded", decoded);

  if (decoded) {
    return decoded;
  } else {
    console.error("userId not found in the token.");
    return null;
  }
};

export const getUserIdOnlyFromToken = () => {
  // Ensure that the code runs only on the client side
  if (typeof window === "undefined" || !window.localStorage) {
    return null; // If running server-side or localStorage is not available
  }

  // Access the localStorage on the client side
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("No access token found in localStorage.");
    return null; // No token found
  }

  // Decode the token with type
  const decoded = jwtDecode<CustomJwtPayload>(accessToken);

  if (decoded && decoded.userId) {
    return decoded.userId;
  } else {
    console.error("userId not found in the token.");
    return null;
  }
};
