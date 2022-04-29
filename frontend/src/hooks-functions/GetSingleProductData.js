const GetSingleProductsData = async (id) => {
	const req = await fetch(`/api/product/${id}`);
	const res = await req.json();

	return res;
};

export default GetSingleProductsData;
