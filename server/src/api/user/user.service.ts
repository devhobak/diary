import { execute } from "./../utils/mysql.connector";
import { UserQueries } from "./user.queries";
import { IUser } from "./user.model";
import bcrypt from 'bcrypt'

/**
 * adds a new active user record
 */
export const insertUser = async (user: IUser) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const result = await execute<{ affectedRows: number }>(UserQueries.AddUser, [
    user.username,
    hashedPassword
  ]);
  return result.affectedRows > 0;
};
