/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Helper functions for sheets.gs testing
 *
 * to tests sheets.gs please add sheets services
 */

/**
 * create test spreadsheets
 */
function createTestSpreadsheet() {
  const spreadsheet = SpreadsheetApp.create('Test Spreadsheet');
  for (let i = 0; i < 3; ++i) {
    spreadsheet.appendRow([1, 2, 3]);
  }
  return spreadsheet.getId();
};

/**
 * populate the created spreadshet with values
 * @param {string} spreadsheetId
 */
function populateValues(spreadsheetId) {
  const batchUpdateRequest = Sheets.newBatchUpdateSpreadsheetRequest();
  const repeatCellRequest = Sheets.newRepeatCellRequest();

  const values = [];
  for (let i = 0; i < 10; ++i) {
    values[i] = [];
    for (let j = 0; j < 10; ++j) {
      values[i].push('Hello');
    }
  }
  const range = 'A1:J10';
  SpreadsheetApp.openById(spreadsheetId).getRange(range).setValues(values);
  SpreadsheetApp.flush();
};

/**
 * Functions to test sheets.gs below this line
 */

/**
 * tests readRange function of sheets.gs
 * @returns {string} spreadsheet ID
 */
function itShouldReadRange() {
  Logger.log('> itShouldReadRange');
  spreadsheetId = createTestSpreadsheet();
  populateValues(spreadsheetId);
  readRange(spreadsheetId);
  return spreadsheetId;
}

/**
 * tests the addPivotTable function of sheets.gs
 * @param {sting} spreadsheetId
 */
function itShouldAddPivotTable(spreadsheetId) {
  Logger.log('> itShouldAddPivotTable');
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheets = spreadsheet.getSheets();
  sheetId = sheets[0].getSheetId();
  addPivotTable(spreadsheetId, sheetId, sheetId);
  SpreadsheetApp.flush();
  Logger.log('Created pivot table');
}

/**
 * runs all the tests
 */
function RUN_ALL_TEST() {
  let spreadsheetId = itShouldReadRange();
  Logger.log('> itShouldWriteToMultipleRanges');
  writeToMultipleRanges(spreadsheetId);
  Logger.log('> itShouldAddSheet');
  addSheet(spreadsheetId);
  itShouldAddPivotTable(spreadsheetId);
}
