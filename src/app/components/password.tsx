"use client";
import { useState } from "react";
import Timer from "../useeffect/page";

const Password = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number | string>();

  const [nameColor, setNameColor] = useState<string>("text-black");
  const [emailColor, setEmailColor] = useState<string>("text-black");
  const [passwordColor, setPasswordColor] = useState<string>("text-black");

  function firstName() {
    if (name === "Sana Faisal") {
      setName("Correct Name");
      setNameColor("text-blue-950");
    } else if (name === "Shehzeena Samad") {
      setName("Correct Name");
      setNameColor("text-blue-950");
    } else if (name === "Misha Baber") {
      setName("Correct Name");
      setNameColor("text-blue-950");
    } else {
      setName("Invalid value");
      setNameColor("text-red-900");
    }
  }
  function yourEmail() {
    if (email === "sana@hotmail.com") {
      setEmail("Correct Email");
      setEmailColor("text-blue-950");
    } else if (email === "shezi@hotmail.com") {
      setEmail("Correct Email");
      setEmailColor("text-blue-950");
    } else if (email === "misha@hotmail.com") {
      setEmail("Correct Email");
      setEmailColor("text-blue-950");
    } else {
      setEmail("Invalid Value");
      setEmailColor("text-red-900");
    }
  }
  function yourPassword() {
    if (password === "12345sana") {
      setPassword("Correct Password");
      setPasswordColor("text-blue-950");
    } else if (password === "12345shezi") {
      setPassword("Correct Password");
      setPasswordColor("text-blue-950");
    } else if (password === "12345misha") {
      setPassword("Correct Password");
      setPasswordColor("text-blue-950");
    } else {
      setPassword("Invalid Value");
      setPasswordColor("text-red-900");
    }
  }

  return (
    <div className="flex flex-col justify-between items-center bg-teal-600   p-4 outline outline-offset-2 outline-black rounded-2xl ">
      <div className="  px-6 m-4 rounded-2xl ">
        <input
          className="text-2xl px-8 py-2 rounded-md "
          type="text"
          placeholder="Enter your name!"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          className="text-2xl px-8 py-2 rounded-md mt-4"
          type="email"
          placeholder="Enter your email address!"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="text-2xl px-8 py-2 rounded-md mt-4"
          type="password"
          placeholder="Enter your Password "
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <br />
        <p
          className={`p-2 text-3xl  font-extrabold  underline underline-offset-4 ${nameColor}`}
        >
          {name}
        </p>

        <p
          className={`p-2 text-3xl  font-extrabold underline underline-offset-4 ${emailColor}`}
        >
          {email}
        </p>
        <p
          className={`p-2 text-3xl  font-extrabold underline underline-offset-4 ${passwordColor}`}
        >
          {password}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={firstName}
          className="flex justify-center items-center text-2xl text-white bg-blue-950 hover:outline hover:outline-offset-4 hover:outline-white ml-16 px-4 py-2 rounded-lg "
        >
          Name Verify
        </button>
        <br />
        <button
          onClick={yourEmail}
          className="flex justify-center items-center text-2xl text-white bg-blue-950 hover:outline hover:outline-offset-4 hover:outline-white ml-16 px-4 py-2 rounded-lg"
        >
          Email verify
        </button>
        <br />
        <button
          onClick={yourPassword}
          className="flex justify-center items-center text-2xl text-white bg-blue-950 hover:outline hover:outline-offset-4 hover:outline-white ml-16 px-4 py-2 rounded-lg"
        >
          Password verify
        </button>
      </div>
    </div>
  );
};

export default Password;
