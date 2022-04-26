
const devs_list = document.querySelector('.devs-list');

fetch("https://my-json-server.typicode.com/devjoysarker/Deves/skill").then(data => data.json()).then(data => {

 let deve = '';
 data.map(data =>{

    deve += `
    <div class="col-md-3">
    <div class="card shadow p-item">
        <a onClick = "singalDevs( ${ data.id } )" href="#" data-bs-toggle="modal" data-bs-target="#devs_list"><img src="${ data.photo }" alt=""></a>
        <div class="card-body">
            <h5>${ data.name }</h5>
            <p>Skill : ${ data.skill }</p>
        </div>
    </div>
    </div>
    `
 });
 devs_list.innerHTML= deve;

});

// singalDevs();

function singalDevs(id){

    const singal_developer = document.querySelector('.singal-developer');
    singal_developer.innerHTML = '';
    fetch("https://my-json-server.typicode.com/devjoysarker/Deves/skill/" + id).then(data => data.json()).then(data => {
    
    
    singal_developer.innerHTML= `
    <div class="row">
    <div class="col-md-6">
        <img style="max-width : 100%;" src="${ data.photo }" alt="">
    </div>
    <div class="col-md-6">
        <h2>${ data.name }</h2>
        <p>${ data.skill }</p>
        <p>Location : ${ data.location }</p>
    </div>
    </div>
    
    `;


    })
};

// singalDevs();