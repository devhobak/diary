export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (datetime, content_title, content_main, content_image) 
      VALUES (?, ?, ?, ?);`,
};
