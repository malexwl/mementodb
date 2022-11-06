// Truncate long string
function truncate(str, n){
  var result = str;
  if (str) {
     result = (str.length > n) ? str.slice(0, n-1) + "..." : str;
  }
  return result;
};

// Remove html tags from string
function removeHtml(html) {
  var result = html;
  if (html) {
     result = html
       .replace(/<\/?[^>]+(>|$)/g, "")
       .replace(/&nbsp;/g," ");
  }
  return result;
};

// Remove html then truncate result
function truncateAndRemoveHtml(str, n) {
  let clearText = removeHtml(str);
  return truncate(clearText, n);
}
