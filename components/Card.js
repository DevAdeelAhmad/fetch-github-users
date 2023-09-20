import Image from "next/image";
import React from "react";

const Card = ({ user }) => {
  return (
    <div className="col-span-4 text-center flex flex-col rounded-lg items-center justify-center bg-gray-800 pb-5 shadow-[0px_0px_29px_0px_#AABBCC]">
      <div className="flex items-center justify-center gap-x-4 py-5">
        <Image
          src={user.avatar_url}
          className="border-2 border-green-400 rounded-full"
          alt="user Image"
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Username</span>
          <h4 className="text-lg">{user.login}</h4>
        </div>
      </div>

      <div className="flex flex-row w-full justify-evenly">
        <div className="flex flex-col">
          <p className="text-gray-400">Articles</p>
          <span className="italic text-blue-300">{user.repos_url.length}</span>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Followers</p>
          <span className="italic text-blue-300">
            {user.followers_url.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
