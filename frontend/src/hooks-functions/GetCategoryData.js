const GetCategoryData = async (name) => {
    const req = await fetch(`http://localhost:5000/category/${name}`);
    const res = await req.json();

    return res
}

export default GetCategoryData