import axios from "axios";
import { useEffect, useState } from "react";
import s from "./CatImage.module.css";

export const CatImage = () => {
  const [cat, setCat] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCat();
  }, []);

  const fetchCat = async function () {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCat(response.data[0].url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.div}>
      <h1>Cat Image</h1>
      {loading ? <div className={s.loader}></div> : <img src={cat} alt="cat" />}
      <button
        onClick={() => {
          fetchCat();
        }}
      >
        Add a new cat
      </button>
    </div>
  );
};
