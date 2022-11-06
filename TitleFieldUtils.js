// !!!DEPENDENCY: StringUtils.js
// Updates value of titleField if it is empty.
// Value to update is used from additionalField,
//   which is cleaned from html
//   and truncated to 35 chars.
function updateTitleIfEmpty(titleFieldName, additionalFieldName, entity) {
   var title = entity.field(titleFieldName);
   if (!title) {
      let additionalText = entity.field(additionalFieldName);
      title = truncate(additionalText, 35);
      entity.set(titleFieldName, title);
   }
}
