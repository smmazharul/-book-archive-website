const searchInput = ()=>{
    const searchField =document.getElementById('search');
    const searchText = searchField.value; 
   if(searchText===' '){
    const errorMessage = document.getElementById('error-message');
    const searchResult =document.getElementById('search-result');
    const searchCount = document.getElementById('cout');
     searchCount.innerText=' ';
    searchResult.textContent=' ';
   errorMessage.innerText= ' Search books name what you want '
    errorMessage.style.color='orange';
    errorMessage.style.textAlign='center';
    errorMessage.style.fontWeight='700';
    return;
   }
    else{
        const errorMessage = document.getElementById('error-message');
       
        errorMessage.innerText= '  ';
        searchField.value=' ';
        const url =`https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
                fetch(url)
                .then(res=>res.json())
                .then(data=>{
                    displaySearchResult(data.docs)
                    const searchCount = document.getElementById('cout');
                    searchCount.innerText=`Search Result Found: ${data.docs.length}`;
                    searchCount.style.color='orange';
                    searchCount.style.textAlign='center';
                    searchCount.style.fontWeight='700';
                })  
    }
                
}
const displaySearchResult = books=>{
  if(books.length===0){
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText= ' please give a valid book name in search box '
    const searchResult =document.getElementById('search-result');
    searchResult.textContent=' ';
     errorMessage.style.color='orange';
     errorMessage.style.textAlign='center';
     errorMessage.style.fontWeight='700';
     return;
  }
    else{
        const searchResult =document.getElementById('search-result');
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText= '  ';
        searchResult.textContent=' ';
    // console.log(books.length);
    searchResult.textContent=' ';
    books.forEach(books=>{
       
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
                    <div class="card h-100">
                            <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${books.title}</h5>
                                <p class="card-text">Author Name: ${books.author_name}</p>
                                <p class="card-text">Publisher: ${books.publisher}</p>
                                <p class="card-text">Publisher Date: ${books.publish_date}</p>
                                
                            </div>
                    </div>  
            `;
            searchResult.appendChild(div);
        })
    }
    
}
