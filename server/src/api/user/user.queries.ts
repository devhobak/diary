export const UserQueries = {
  AddUser: `
    INSERT INTO diary_system.user (username, password, isAdmin) 
    VALUES (?, ?, 0);`,

  GetUserByName: `
    SELECT * FROM diary_system.user WHERE username=?;`,

  GetUserById: `
    SELECT * FROM diary_system.user WHERE id=?;`,
};
