const GetCategoryData = async (name) => {
	const req = await fetch(`/api/category/${name}`);
	const res = await req.json();

	return res;
};

export default GetCategoryData;
