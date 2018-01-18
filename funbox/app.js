var feedContents = document.querySelectorAll(".feed:not(.disabled) .feed-content");
var i;

for (i = 0; i < feedContents.length; i++) {
  initOnclick(feedContents[i], feedContents[i].parentNode);
}

var links = document.querySelectorAll(".feed:not(.disabled) .comment a");

for (i = 0; i < links.length; i++) {
  initOnclick(links[i], links[i].parentNode.parentNode.parentNode);
}

function initOnclick(element, feed) {
  element.onclick = function () {
    if (feed.classList.contains("selected")) {
      feed.classList.remove("selected");
    } else {
      feed.classList.add("selected");
    }
    return false;
  };
}