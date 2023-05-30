export const LogQueries = {
  AddLog: `
      INSERT INTO diary_system.record (user_id, datetime, content_title, content_main, color) 
      VALUES (?, now(), ?, ?, UNHEX(?));`,
  GetLogByDay: `
      SELECT id, user_id, datetime, content_title, content_main, HEX(color) FROM diary_system.record WHERE user_id = ? and DATE(datetime) = ?;`,
  GetLogByMonth: `
      SELECT * FROM diary_system.record WHERE user_id = ? and YEAR(datetime) = ? and MONTH(datetime) = ?;`,
  UpdateLogById: `
      UPDATE diary_system.record
      SET content_title = ?, content_main = ?, color = UNHEX(?) WHERE id = ?`,
};
