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
function RUN_ALL_TESTS() {
  Logger.log('> itShouldGetConnections');
  getConnections();
  Logger.log('> itShouldGetSelf'); // Requires the scope userinfo.profile
  getSelf();
  Logger.log('> itShouldGetAccount');
  getAccount('me');
}
