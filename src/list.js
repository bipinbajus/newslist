let getData = async () => {
    
    const response = await fetch('../data/code-test.json');
    const data = await response.json();

    return data   
}

let showList = () => {
    getData().then((d) =>{
        let content = ""
        d.articles.forEach((value, index, array) => {
            content += `<article>
            <div class="row">
                <div class="col-l">
                    <span class="category">${value.primarySectionRouteName}</span>
                    <h3><a href="${value.link}">${value.headline} </a></h3>
                    <p>${value.standfirst}</p>
                </div>
                <div class="col-r">
                    <img alt="${value.thumbnail.title}" height="${value.thumbnail.height}" width="${value.thumbnail.width}" src="${value.thumbnail.src}">
                </div>
            </div>
            </article>`
        })            
        document.querySelector("#root").innerHTML = content             
    })       
}

export { showList } 