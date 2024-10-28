document.querySelector('button').addEventListener('click', getYourFlower)
    
    
    function getYourFlower () {
    const apiKey = 'i97TJC_uw2UVQ-E6AkXAXxdbUrf54UNzaJsfZZJzFzc'; 
    const url = `https://api.unsplash.com/photos/random?query=flower&client_id=${apiKey}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            document.querySelector('img').src = data.urls.small; 
         
        })
        .catch(err => {
            console.log(`Error: ${err}`); 
        });
};

