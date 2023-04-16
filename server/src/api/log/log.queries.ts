export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (user_id, datetime, content_title, content_main, content_image) 
      VALUES (?, ?, ?, ?, ?);`,
  GetLogByDay: `
      SELECT * FROM diary_system.record WHERE id = ? and DATE(datetime) = ?;`,
};
