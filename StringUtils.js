// Truncate long string
function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + "..." : str;
};

// Remove html tags from string
function removeHtml(html) {
   return html
     .replace(/<\/?[^>]+(>|$)/g, "")
     .replace(/&nbsp;/g," ");
};
