'use strict'



function getObjects() {
    var objects = [
        {
            id: 'Sokoban',
            type: 'Game',
            url: 'sokoban/sokoban.html',
            img: 'img/portfolio/sokoban.jpg',
            caption: 'Push the gem!',
            description:'A fun game to burn the time. <br>\
                        Push the gems into their desegneited tiles.<br>\
                        Try to do it in the least amout of time and movement.' ,
        },
        {
            id: 'Calculator',
            type: 'Function',
            url: 'sokoban/sokoban.html',
            img: 'img/portfolio/Calcu.jpg',
            caption: 'Lets do math',
            description:'A simple easy to user calculator.' ,
            
        }
    ]
    return objects
}

function renderPortfolioGrid() {
    var objects = getObjects()
    var elDiv = document.querySelector('#portfolio-grid')
    var htmlStr = '';
    for (var i = 0; i < objects.length; i++) {
        htmlStr +='\
        <div class="col-md-4 col-sm-6 portfolio-item">\
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal'+ objects[i].id +'">\
          <div class="portfolio-hover">\
            <div class="portfolio-hover-content">\
              <i class="fa fa-plus fa-3x"></i>\
            </div>\
          </div>\
          <img class="img-fluid" src="'+ objects[i].img +'" alt="">\
        </a>\
        <div class="' + objects[i].caption + '">\
          <h4>Threads</h4>\
          <p class="text-muted">Illustration</p>\
        </div>\
      </div>'
        
    }
}


function renderPortfolio() {
    var objects = getObjects()
    var elDiv = document.querySelector('#innerPortfolio')
    var htmlStr ='';
    for (var i = 0; i < objects.length; i++) {
        htmlStr += '\
        <div class="col-md-4 col-sm-6 portfolio-item">\
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal'+ objects[i].id +'">\
          <div class="portfolio-hover">\
            <div class="portfolio-hover-content">\
              <i class="fa fa-plus fa-3x"></i>\
            </div>\
          </div>\
          <img class="img-fluid portfolio-img" src="'+ objects[i].img +'" alt="">\
        </a>\
        <div class="portfolio-caption">\
          <h4>'+ objects[i].id +'</h4>\
          <p class="text-muted">'+ objects[i].type +'</p>\
        </div>\
        </div>'
    }
    elDiv.innerHTML += htmlStr
}
