import React, { useState } from "react";
import Alert from "./Alert";

const Search = ({ searchUser }) => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(true);
    } else {
      searchUser(text);
      setAlert(false);
    }
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto">
        {alert && <Alert />}

        <h1 className={tailwind.title}>Pesquisar Usuários do GitHub</h1>
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            name="text"
            className={tailwind.searchInput}
            onChange={onChangeText}
            value={text}
          />
          <input type="submit" value="Pesquisar" className={tailwind.button} />
        </form>
      </div>
    </>
  );
};

const tailwind = {
  title: "text-2xl mb-2 mt-3 text-black",
  searchInput: "w-full rounded h-10 border-2 mb-6",
  button:
    "w-full h-10 rounded-full border-2 border-gray-700 bg-black text-gray-400",
};

export default Search;
