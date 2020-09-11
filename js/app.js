const search = document.getElementById('search')
const repas = document.getElementById('repas')

// const searchText = async text => {
//     const result = await fetch('http://polytechbot.herokuapp.com/api/repas', {
//         mode: 'no-cors',
//         headers: header
//     })
//     const results = await result.json()
//     console.log(results)
// }
// searchText('');
let header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/json',
});
// fetch('http://polytechbot.herokuapp.com/api/repas', {
//         mode: "no-cors"
//     })
//     .then(result => console.log(result))

// fetch('http://polytechbot.herokuapp.com/api/repas', {
//         headers: header,
//         mode: 'no-cors'
//     })
//     .then(function (response) {
//         console.log(response);
//         return response.text();
//     })

// search.addEventListener('input', searchText(search.value)); 

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: "GET",
    success: (data) => {
        alert('ok');
        console.log(data);
    },
    error: (data) => {
        alert('ko');
        alert(data);
        console.log(data);
    }
})