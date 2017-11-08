'use strict'

function initPage() {
  renderPortfolio()
  renderModuls()
}

function sendMail() {
    var mailAdress = document.querySelector('#emailadress');
    var mailSubject = document.querySelector('#emailsubject');
    var mailContent = document.querySelector('#emailcontent');

    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ben123tu@gmail.com&su=' + mailSubject.value + '&body=' + mailContent.value ,'_blank');
}




function getObjects() {
  var objects = [
    {
      id: 'Sokoban',
      type: 'Game',
      url: 'sokoban/sokoban.html',
      img: 'sokoban',
      caption: 'Push the gem!',
      description: 'A fun game to burn the time. <br>\
                        Push the gems into their desegneited tiles.<br>\
                        Try to do it in the least amout of time and movement.' ,
    },
    {
      id: 'Calculator',
      type: 'Function',
      url: 'sokoban/sokoban.html',
      img: 'calcu',
      caption: 'Lets do math',
      description: 'A simple easy to user calculator.',

    }
  ]
  return objects
}



function renderPortfolio() {
  var objects = getObjects()
  var elDiv = document.querySelector('#innerPortfolio')
  var htmlStr = '';
  for (var i = 0; i < objects.length; i++) {
    htmlStr += '\
        <div class="col-md-4 col-sm-6 portfolio-item">\
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal'+ i + '">\
          <div class="portfolio-hover">\
            <div class="portfolio-hover-content">\
              <i class="fa fa-plus fa-3x"></i>\
            </div>\
          </div>\
          <img class="img-fluid portfolio-img" src="/img/portfolio/'+ objects[i].img + '-thumbnail.jpg" alt="">\
        </a>\
        <div class="portfolio-caption">\
          <h4>'+ objects[i].id + '</h4>\
          <p class="text-muted">'+ objects[i].type + '</p>\
        </div>\
        </div>'
  }
  elDiv.innerHTML += htmlStr
}


function renderModuls() {
  var objects = getObjects()
  var elDiv = document.querySelector('body')
  var htmlStr = '';
  for (var i = 0; i < objects.length; i++) {
    htmlStr += `
    <div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${objects[i].id}</h2>
                  <p class="item-intro text-muted">${objects[i].caption}.</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/${objects[i].img}.jpg" alt="">
                  <p>${objects[i].description}</p>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>`
  }
  console.log(htmlStr)
  elDiv.innerHTML += htmlStr
  console.log(elDiv)
}