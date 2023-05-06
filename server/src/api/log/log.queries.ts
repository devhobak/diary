export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (user_id, datetime, content_title, content_main, content_image) 
      VALUES (?, ?, ?, ?, ?);`,
  GetLogByDay: `
      SELECT * FROM diary_system.record WHERE user_id = ? and DATE(datetime) = ?;`,
  GetLogByMonth: `
      SELECT * FROM diary_system.record WHERE user_id = ? and YEAR(datetime) = ? and MONTH(datetime) = ?;`,
};
