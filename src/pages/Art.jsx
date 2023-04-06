import { useEffect, useState } from "react";
import ArtItem from "../components/ArtItem";

function Art() {
  // fetch items
  const [art, setArt] = useState([]);
	const [limit, setLimit] = useState(4);

  const fetchArt = async () => {
    try {
      const response = await fetch('https://acnhapi.com/v1/art');
      const data = await response.json();
      setArt(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { fetchArt(); }, []);

	const showMoreItems = () => {
		setLimit(limit + 4)
	}

  return (
	<div className="my-10">
    {Object.entries(art).slice(0, limit).map(([, art]) => (
        <ArtItem key={art["id"]} art={art} />
	  ))}

		<button onClick={showMoreItems} className="bg-beige text-brown rounded-full px-6 py-2 text-xl font-medium hover:-rotate-3 transition-transform">Load more</button>
	</div>
  );
}

export default Art;
