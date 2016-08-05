import request from 'request';
import sortBy from 'lodash/fp/sortBy';
import moment from 'moment';

export default function getTasks() {
  const email = process.env.KANBANFLOW_USERNAME;
  const password = process.env.KANBANFLOW_PASSWORD;
  const boardId = process.env.KANBANFLOW_BOARD_ID;

  const client = request.defaults({ jar: true });

  return logInToKanbanflow(client, email, password)
    .then(() => getTasksFromBoard(client, boardId));
}

function logInToKanbanflow(client, email, password) {
  return new Promise((resolve, reject) => {
    client.post(
      'https://kanbanflow.com/login',
      { form: { email, password } },
      error => {
        if (error) {
          reject(new Error('Failed to connect to Kanbanflow'));
        } else {
          resolve();
        }
      }
    );
  });
}

function getTasksFromBoard(client, boardId) {
  return new Promise((resolve, reject) => {
    client.get(`https://kanbanflow.com/board/${boardId}`, (error, response, body) => {
      if (error) {
        reject(new Error('Failed to connect to Kanbanflow'));
      }

      try {
        const board = extractBoardJSONFromPage(body);
        const model = getTasksModel(board);

        resolve(model);
      } catch (e) {
        reject(new Error('Failed to get the tasks from Kanbanflow'));
      }
    });
  });
}

function extractBoardJSONFromPage(body) {
  const startHook = `require('browserify.board').bootstrap(`;
  const start = body.indexOf(startHook);

  const bodyWithoutPrecedingCrap = body.substring(start + startHook.length);

  const endHook = ');</script>';
  const end = bodyWithoutPrecedingCrap.indexOf(endHook);

  const jsonBoardData = bodyWithoutPrecedingCrap.substring(0, end);
  
  return JSON.parse(jsonBoardData);
}

function getTasksModel(board) {
  const getColumnId = name => board.columns.find(column => column.name === name).uniqueId;
  const getTaskNames = columnId => board.taskSections
    .find(section => section.info.columnId === columnId)
    .tasks
    .map(task => task.name);

  const dayOfWeek = moment().format('dddd');
  const todaysColumnId = getColumnId(dayOfWeek);
  const tasksForToday = getTaskNames(todaysColumnId);

  const thisWeekColumnId = getColumnId('This week');
  const tasksForThisWeek = getTaskNames(thisWeekColumnId);

  return {
    today: tasksForToday,
    thisWeek: tasksForThisWeek
  };
}
