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
// [START tasks_quickstart]
/**
 * Lists the user's tasks.
 */
function listTaskLists() {
  const optionalArgs = {
    maxResults: 10 // Maximum number of task lists returned on one page
  };
  try {
    /**
     * Returns all the authenticated user's task lists.
     * @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list
     */
    const response = Tasks.Tasklists.list(optionalArgs);
    const taskLists = response.items;
    // Print task list of user if available.
    if (taskLists && taskLists.length > 0) {
      for (let i = 0; i < taskLists.length; i++) {
        const taskList = taskLists[i];
        Logger.log('%s (%s)', taskList.title, taskList.id);
      }
      return;
    }
    Logger.log('No task lists found.');
  } catch (err) {
    // TODO (developer) - Handle exception from Task API
    Logger.log('Failed with error %s', err.message);
  }
}
// [END tasks_quickstart]
