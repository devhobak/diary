export const UserQueries = {
  AddUser: `
    INSERT INTO diary_system.user (username, password, email, android_token) 
    VALUES (?, ?, ?, ?);`,

  GetUserByName: `
    SELECT * FROM diary_system.user WHERE username=?;`,

  GetUserById: `
    SELECT * FROM diary_system.user WHERE id=?;`,

  GetUserByEmail: `
    SELECT * FROM diary_system.user WHERE email=?;`,
};
