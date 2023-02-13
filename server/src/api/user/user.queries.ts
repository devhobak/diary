export const UserQueries = {
    AddUser: `
    INSERT INTO diary_system.user (username, password, isAdmin) 
    VALUES (?, ?, 0);`
  };
