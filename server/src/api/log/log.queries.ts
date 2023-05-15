export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (user_id, datetime, content_title, content_main, content_image) 
      VALUES (?, now(), ?, ?, ?);`,
  GetLogByDay: `
      SELECT * FROM diary_system.record WHERE user_id = ? and DATE(datetime) = ?;`,
  GetLogByMonth: `
      SELECT * FROM diary_system.record WHERE user_id = ? and YEAR(datetime) = ? and MONTH(datetime) = ?;`,
  UpdateLogById: `
      UPDATE diary_system.record
      SET content_title = ?, content_main = ? WHERE id = ?`,
};
