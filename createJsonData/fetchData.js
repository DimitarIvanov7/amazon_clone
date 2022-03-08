import fetch from 'node-fetch';
import fs from 'fs'

const booksData = [
    'B087LQ9B4D',
    'B08SQCY91J',
    'B09H3791ZY',
    'B09CPTL1HL',
    'B07BDL71RX'
]

const fetchData = async (asin) => {
    const req = await fetch(`https://api.rainforestapi.com/request?api_key=CEC92ED8BDF642018BC24E67E14E9D7F&type=product&amazon_domain=amazon.com&asin=${asin}&output=json`)
    const jsonData = await req.json()
    return jsonData
}


let PromiseData = await Promise.all(
    booksData.map(async book => {
        const waiting = await fetchData(book)
        return waiting
    })
)

function saveFile(data) {
    // stringify to save jsonfile
    const objectsStr = JSON.stringify(data);

    // save json
    fs.writeFile(`luggageData.json`, objectsStr, function(err, result) {
        if(err) console.log('error', err);
    })
}

saveFile(PromiseData)


