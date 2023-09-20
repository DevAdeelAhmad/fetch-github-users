"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <main className="h-screen w-full px-10 py-10">
      <div className="flex items-center justify-center">
        <h2 className="text-[#3982ff] text-4xl italic font-mono font-semibold">
          List of GitHub Users
        </h2>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-12 gap-y-10 grid-flow-row pt-14 px-6">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
