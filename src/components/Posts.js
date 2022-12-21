import { currentUser } from '../lib_firebase/auth.js';

export const Posts = (post) => {
  const $section = document.createElement('div');
  $section.className = 'container-Posts__Post';
  $section.innerHTML = `
   
        <div class="container-headerPost">
          <div class="container-user">
            <img  class='container-user__imgUser'src="${currentUser().photoURL}">
            <p class='container-user__nameUser'> ${currentUser().displayName} </p>
          </div>
            <img class='container-headerPost__hamburguerIcon' src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_hamburguer.png">
        </div>
        <div class='container-content'>
              <div  class='container-content__textPost'>
              <p>${post.text}</p> 
              </div>
              <div class='container-content__imgPost'>
              <img class='container-content__imgPost-img' src="${post.file}">
              </div>
        </div>

        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_like.png" >
                <span class="containerLikes__count">  ${post.likes}                    
                </span>                 
              </div>
            </div>
            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__commentIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_comments.png" >           
                <span class="containerComments__count">  ${post.nComments}               
                </span>   
              </div>
            </div>
        </div>
        
        <div class="containerComment">
          <img class="containerComments__comment-imgProfile" src="${currentUser().photoURL}">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
        </div>
      `;

  console.log('post en wall', post);

  return $section;
};
