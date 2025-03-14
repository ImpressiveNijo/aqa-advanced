import axios from 'axios';

    const callAxios = async () => {
    const responseGetObjects = await axios.get(`https://api.restful-api.dev/objects`);
    console.log(responseGetObjects.data)

    const responseGetObjectId = await axios.get('https://api.restful-api.dev/objects?id=3&id=5&id=10');
    console.log(responseGetObjectId.data)

    const responseAddObject = await axios.post('https://api.restful-api.dev/objects',
        {
            name: "Apple MacBook Pro 18",
            data: {
               year: 2020,
               price: 1849.99,
               'CPU model': "Intel Core i9",
               'Hard disk size': "1 TB"
            }
        }
    );
    console.log(responseAddObject.data)

    const responsePut = await axios.put(`https://api.restful-api.dev/objects/${responseAddObject.data.id}`,
        {
            name: "Apple MacBook Pro 16",
            data: {
               year: 2019,
               price: 2049.99,
               'CPU model': "Intel Core i9",
               'Hard disk size': "1 TB",
               "color": "gold"
            }
         }
    );
    console.log(responsePut.data)
   
    const responseDelete = await axios.delete(`https://api.restful-api.dev/objects/${responseAddObject.data.id}`);
    console.log(responseDelete.data)
};
callAxios();