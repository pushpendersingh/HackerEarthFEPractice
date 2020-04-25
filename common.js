function cardColumn(oData){
  const cardColumn = document.createElement('div');
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCon = document.createElement('div');
  const title = document.createElement('h4');
  const cardText = document.createElement('p');
  const feature = document.createElement('div');
  const cardFooter = document.createElement('div');

  cardColumn.setAttribute('class','col mb-4');
  card.setAttribute('class','card h-100');
  image.setAttribute('class','card-img-top');
  image.setAttribute('src','https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/p960x960/60549567_2469035279794640_838730430562697216_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=75DEHTBpTdUAX9DxXWf&_nc_ht=scontent.fblr2-1.fna&_nc_tp=6&oh=9f1f4f4b7f6827fc84dd49254e78fcd3&oe=5ECA559F');
  cardBody.setAttribute('class','card-body');
  titleCon.setAttribute('class','d-flex justify-content-between align-items-top mb-3');
  title.setAttribute('class','card-title mb-0 pr-2');
  cardText.setAttribute('class','card-text');
  feature.setAttribute('class','text-warning');
  cardFooter.setAttribute('class','card-footer');

  title.innerHTML = oData.title;
  feature.innerHTML='<svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" /></svg>';
  cardText.innerHTML = oData.platform;
  cardFooter.innerHTML = '<div class="d-flex justify-content-between"><div class="">Genre: <a href="#">'
  + oData.genre +'</a></div><div class="text-info">'
  +oData.score+'</div></div>';

  titleCon.append(title);
  titleCon.append(feature);
  cardBody.append(titleCon);
  cardBody.append(cardText);
  card.append(image);
  card.append(cardBody);
  card.append(cardFooter)
  cardColumn.append(card);
  return cardColumn;
}

var content  = document.getElementById('content');
var allData =[];
$.ajax({
  method: "GET",
  url: "http://starlord.hackerearth.com/gamesarena"
})
  .done(function( aData ) {
    aData.shift();
    allData=aData;
    addCards();
  });


function addCards(){
  content.innerHTML='';
  for(var i=0; i<allData.length;i++){
    content.append(cardColumn(allData[i]));
  }
}

$('#search').on('input', function(oEvent) {
  var input = $('#search').val();
  content.innerHTML='';
  if(input){
    for(var i=0; i<allData.length;i++){
      if(allData[i].title.search(input) != -1){
        content.append(cardColumn(allData[i]));
      }
    }
  }else{
    addCards();
  }
});
