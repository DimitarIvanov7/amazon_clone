const GetSingleProductsData = async (id) => {
	const req = await fetch(`/product/${id}`);
	const res = await req.json();

	return res;
};

export default GetSingleProductsData;
