const GetSingleProductsData = async (id) => {
    const req = await fetch(`http://localhost:5000/product/${id}`);
    const res = await req.json()

    return res
}

export default GetSingleProductsData