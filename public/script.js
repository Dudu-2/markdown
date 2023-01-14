window.onload = function () {
  var converter = new showdown.Converter();
  var pad = document.querySelector("#pad");
  var markdownArea = document.querySelector("#markdown");

  // make the tab act like a tab

  var convertTextAreaToMarkdown = function () {
    var markdownText = pad.value;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  pad.addEventListener("input", convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();
};
