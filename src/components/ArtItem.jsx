function ArtItem(props) {
  const { key, art } = props;

  function hasCounterfeit() {
		if(art['hasFake']) {
			return <p className="bg-yellow rounded-full inline-block p-2">🦊</p>
		}
	}

  return (
    <div className="bg-beige relative rounded-3xl w-96 mx-auto p-10 pt-4">
      <h3 className="bg-brown text-beige rounded-full -rotate-3 float-left -ml-4 -mt-10 px-6 py-2 text-xl font-medium">
        {art["name"]["name-USen"]}
      </h3>
      <img src={art["image_uri"]} className="block my-8 mx-auto" />
      <p className="text-brown text-left">{art["museum-desc"]}</p>
      <div className="mt-6 text-left">
				<p className="bg-yellow text-beige font-medium rounded-full inline-block p-2 px-4 mr-2">💰 {art['buy-price']}</p>
				{hasCounterfeit()}
			</div>
    </div>
  );
}

export default ArtItem;
