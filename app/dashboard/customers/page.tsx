import React from "react";
import { Metadata } from "next";
import { Userr } from "../../lib/definitions"; // Import the User type

export const metadata: Metadata = {
  title: "Customers",
};

async function fetchUsers(): Promise<Userr[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const CustomerPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
    <h1>User List</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> ({user.username})<br />
          <em>{user.email}</em><br />
          <p className="ps-10">Company: {user.company.name}</p>
          <p className="ps-10">Address: {user.address.street}, {user.address.city}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default CustomerPage;
