export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (user_id, datetime, content_title, content_main, content_image) 
      VALUES (?, ?, ?, ?, ?);`,
};
