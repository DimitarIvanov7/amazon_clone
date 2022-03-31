const GetAllProductsData = async (location) => {
	const req = await fetch(`/${location}`);
	const res = await req.json();

	const uniqueCategories = res
		.map((item) => item.Data.categories[0].name)
		.filter((item, i, ar) => ar.indexOf(item) === i)
		.sort();

	const categoriesObj = uniqueCategories.map((categorie) => {
		return res.filter(
			(product) => product.Data.categories[0].name === categorie
		);
	});

	return {
		categories: uniqueCategories,
		products: categoriesObj,
	};
};

export default GetAllProductsData;
