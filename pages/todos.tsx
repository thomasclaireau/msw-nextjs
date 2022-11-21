import { useState } from "react";
import { User } from "../mocks/types";

type Props = {
  users: User[];
};

export default function Home({ users }: Props) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
