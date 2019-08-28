book1= `
<div class="card" style="width: 18rem;">
<img src="https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-010.jpg?w=800&quality=85"" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Charged: The New Movement to Transform American Prosecution and End Mass Incarceration</h5>
  <a href="#" class="btn btn-primary" id="btn">Show Description</a>
</div>
</div>`

book2= `
<div class="card" style="width: 18rem;">
  <img src="https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-008.jpg?w=800&quality=85" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Furious Hours: Murder, Fraud, and the Last Trial of Harper Lee</h5>
    <a href="#" class="btn btn-primary" id="btn2">Show Description</a>
  </div>
</div>`

book3=`
<div class="card" style="width: 18rem;">
  <img src="https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-009.jpg?w=800&quality=85" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">Dreyer’s English: An Utterly Correct Guide to Clarity and Style</h5>
    <a href="#" class="btn btn-primary" id="btn3">Show Description</a>
  </div>
</div>`

document.getElementById("root").innerHTML += `${book1} ${book2} ${book3}`;


document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "btn") {
      if (document.getElementById("btn").innerText == "Show Description") {
          document.getElementById("rt2").innerHTML+= "American courtrooms are meant to be equal playing fields for both the prosecution and the defense. But journalist and legal commentator Emily Bazelon argues that the country’s mass incarceration crisis proves that this ideal couldn’t be farther from the reality."


          document.getElementById("btn").innerHTML = "Hide Description"
      } else {

          document.getElementById("rt2").innerText = ""
          document.getElementById("btn").innerText = "Show Description";


      }
  }
})

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "btn2") {
      if (document.getElementById("btn2").innerText == "Show Description") {
          document.getElementById("rt2").innerHTML+= "What happened to Harper Lee after she published To Kill a Mockingbird? Debut author Casey Cep sought to find out in her book Furious Hours, which details Lee’s obsession with a multi-murder investigation in 1970s Alabama."



          document.getElementById("btn2").innerHTML = "Hide Description"
      } else {

          document.getElementById("rt2").innerText = ""
          document.getElementById("btn2").innerText = "Show Description";


      }
  }
})

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "btn3") {
      if (document.getElementById("btn3").innerText == "Show Description") {
          document.getElementById("rt2").innerHTML+= "If learning about the pillars of punctuation and grammar doesn’t excite you, let Benjamin Dreyer change your mind. As the copy chief of Random House, Dreyer has invaluable insider knowledge on how to become a better writer, and he shares his enthusiasm about everything from how to use split infinitives to the value of the semicolon." 




          document.getElementById("btn3").innerHTML = "Hide Description"
      } else {

          document.getElementById("rt2").innerText = ""
          document.getElementById("btn3").innerText = "Show Description";


      }
  }
})

// function showHideDescrip(){
//   if (document.getElementById('btn').click){
//     document.getElementById('d1').style.display='block'
//   }else{
//     document.getElementById('d1').style.display='none'
//   }
// }

// class BookComponent {
//   constructor(title, description, image){
//     this.title=title;
//     this.description=description;
//     this.image=image
//     this.template = `
//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src=${image} alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">${title}</h5>
//     <p class="card-text">${description}</p>
//     <a href="#" class="btn btn-primary">Show Description</a>
//   </div>
// </div>
//     `
//   }
// }

// class BookCardComponent{
//   template=`
//   ${new BookComponent ("Charged: The New Movement to Transform American Prosecution and End Mass Incarceration","American courtrooms are meant to be equal playing fields for both the prosecution and the defense. But journalist and legal commentator Emily Bazelon argues that the country’s mass incarceration crisis proves that this ideal couldn’t be farther from the reality.", "https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-010.jpg?w=800&quality=85").template}
   
//  ${new BookComponent("Furious Hours: Murder, Fraud, and the Last Trial of Harper Lee", "What happened to Harper Lee after she published To Kill a Mockingbird? Debut author Casey Cep sought to find out in her book Furious Hours, which details Lee’s obsession with a multi-murder investigation in 1970s Alabama.", "https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-008.jpg?w=800&quality=85").template}
    
// ${new BookComponent ("Dreyer’s English: An Utterly Correct Guide to Clarity and Style", "If learning about the pillars of punctuation and grammar doesn’t excite you, let Benjamin Dreyer change your mind. As the copy chief of Random House, Dreyer has invaluable insider knowledge on how to become a better writer, and he shares his enthusiasm about everything from how to use split infinitives to the value of the semicolon.","https://timedotcom.files.wordpress.com/2019/05/best-non-fiction-of-the-year-so-far-2019-009.jpg?w=800&quality=85").template}
//     </div>`

// }
// I tried to implement the components with the different event listeners, but I was having trouble with my conditionals. I hard coded each card to simply have something that worked. This is nowhere near complete nor accurate.