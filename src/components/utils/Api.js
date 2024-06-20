const baseUrl = 'http://localhost:3001';

export const getItems =() => {
    return  fetch(`${baseUrl}/Items`)
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
};

export const addItems =() => {
    return  fetch(`${baseUrl}/Items`,{
    method: 'POST',
    body: JSON.stringify({ 
        "_id": 1,
        "name": "Boot",
        "weather": "cold",
        "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e"
      })
    })
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
};

export const deleteItems =(Item) => {
    return  fetch(`${baseUrl}/Items`,{
    method: 'DELETE',
    body: JSON.stringify({Item})
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    })
