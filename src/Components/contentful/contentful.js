const client = require('contentful').createClient({
    space:'vkkgysutwxtw',
    accessToken:'YBnXUgHOKOyx10zuYWcTA-V0AEyrDEo7AZRWhGadSII'
});

const getSefaxPosts = () => 
client.getEntries({
    content_type:'sefasProduct'
})
.then(response=>response.items)

const getAdvertPost=()=>
client.getEntries({
    content_type:'sefaxSlider'
})
.then(response=>response.items)


export {
    getSefaxPosts,
    getAdvertPost
}