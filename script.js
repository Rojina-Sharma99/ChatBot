const chatbotToggler = document.querySelector("#chatbot-toggler");

chatbotToggler.addEventListener("click", () =>{
    document.body.classList.toggle("show-chatbot")
});

const closeChatbot= document.querySelector("#close-chatbot");

closeChatbot.addEventListener("click",()=>{
    document.body.classList.remove("show-chatbot");
})