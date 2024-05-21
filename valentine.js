document.addEventListener('DOMContentLoaded', (event) => {

  let t1 = document.querySelector("#t1");

  var textArray = [
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain!",
      "Think could be a mistake",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Would you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart :(",
  ];

  var currentIndex = 0;

  function changeText() {
      var t1 = document.getElementById("t1");

      if (currentIndex < textArray.length - 1) {
          t1.innerText = textArray[currentIndex];
          currentIndex = (currentIndex + 1) % textArray.length;
      } else {
          document.body.innerHTML = '';

          var image = document.createElement('img');
          image.src = 'b2.gif'; // Replace with the path to your image
          image.style.width = '100%';
          image.style.maxWidth = '600px';
          image.style.height = 'auto';
          image.style.margin = '0 auto';
          document.body.appendChild(image);
      }
  }

  let teddy = document.querySelector("#teddy");
  let text = document.querySelector("#text");
  let yay = document.querySelector("#yay");

  let yes = document.querySelector("#yes");
  let kiss = document.querySelector("#kiss");

  yes.addEventListener("click", () => {
      teddy.style.display = "none";
      text.style.display = "none";
      yes.style.display = "none";
      let no = document.querySelector("#no");
      no.style.display = "none";
      kiss.style.display = "block";
      yay.style.display = "block";
  });

  let no = document.querySelector("#no");
  no.addEventListener("click", changeText);
});
