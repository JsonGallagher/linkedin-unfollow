// Refactored - Source: https://github.com/TalEliyahu/LinkedIn-Unfollower/blob/master/README.md

let totalUnfollowed = 0;
const unfollowFunction = setInterval(function() {
const unfollowButton = document.querySelectorAll("ul > li [data-control-name=\"actor_follow_toggle\"].is-following");
    for(let i = unfollowButton.length - 1; i>=0; i--) {
     totalUnfollowed++;
     UnfollowButton[i].click();
    }
   }, 1000);

const ScrollToBottom = setInterval(function() {
    window.scrollBy(0, 12.5);
   }, 15);

function checkPageEnd(LastHeight) {
let currentHeight = document.body.scrollHeight;
    if(!(currentHeight > LastHeight)) {
     clearInterval(ScrollToBottom);
     clearInterval(UnfollowFunction);
     alert(`Unfollowed ${totalUnfollowed} users`);
    } else setTimeout(function() {
        checkPageEnd(currentHeight);
    }, 7.5*1000);
   }
checkPageEnd(0);