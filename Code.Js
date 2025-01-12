function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitData(obj) {
  // Replace your google Sheet id below >>>>>>>>>>>>>>>>>>>>
  var spreadsheetId = "11x5kaH1st9Mjp4aaHIcYUhELV_f4Ctk7";
  var sheetName = "Data";
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(sheetName);
  var flag = 1;
  var lastRow = sheet.getLastRow();

  for (var i = 1; i <= lastRow; i++) {
    var currentId = sheet.getRange(i, 1).getValue();

    if (currentId == obj) {
      flag = 0;
	  // Replace your google Sheet Heading below >>>>>>>>>>>>>>>>>>>>
      var columnB = sheet.getRange(i, 2).getValue();
      var columnC= sheet.getRange(i, 3).getValue();
      var columnD = sheet.getRange(i, 4).getValue();
      var columnE = sheet.getRange(i, 5).getValue();
      var columnF = sheet.getRange(i, 6).getValue();
      var columnG = sheet.getRange(i, 7).getValue(); 

     

      var resultHtml = "<table><tr><th colspan=2><center>YOUR EXAM Name</center></th></tr><tr><td>COL-NAME-A:</td><td>"
        + obj + "</td></tr><tr><td>COL-NAME-B:</td><td>" + columnB + "</td></tr><tr><td>COL-NAME-C:</td><td>"
        + columnC + "</td></tr><tr><td>COL-NAME-D:</td><td>" + columnD + "</td></tr><tr><td>COL-NAME-E:</td><td>" + columnE+ "</td></tr><tr><td>COL-NAME-F:</td><td>" + columnF+ "</td></tr><tr><td>COL-NAME-G:</td><td>" + columnG + "</td></tr></table>";

      return resultHtml;




    }
  }

  if (flag == 1) {
    var notFoundMessage = "DATA IS NOT FOUND!";
    return notFoundMessage;
  }
}
