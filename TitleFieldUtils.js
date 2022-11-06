// !!!DEPENDENCY: StringUtils.js
// Updates value of titleField if it is empty.
// Value to update is used from additionalField,
//   which is cleaned from html
//   and truncated to 35 chars.
function updateTitleIfEmpty(titleFieldName, additionalFieldName) {
   let e = entity();
   var title = e.field(titleFieldName);
   if (!title) {
      let additionalText = e.field(additionalFieldName);
      title = truncate(additionalText, 35);
      e.set(titleFieldName, title);
   }
}
