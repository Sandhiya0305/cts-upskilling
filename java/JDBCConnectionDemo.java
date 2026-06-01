/*
31. Basic JDBC Connection
• Objective: Connect Java with a relational database.
• Task: Connect to a local MySQL/SQLite database and retrieve data.
• Instructions:
o Set up a database with a students table.
o Write code to load the JDBC driver, create a connection, execute a SELECT query, and
print results.
*/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

class JDBCConnectionDemo {
	public static void main(String[] args) throws Exception {
		Class.forName("org.sqlite.JDBC");

		try (Connection connection = DriverManager.getConnection("jdbc:sqlite:students.db")) {
			try (PreparedStatement createTable = connection.prepareStatement(
					"CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, grade TEXT)")) {
				createTable.executeUpdate();
			}

			try (PreparedStatement insertStudent = connection.prepareStatement(
					"INSERT INTO students (id, name, grade) VALUES (?, ?, ?)")) {
				insertStudent.setInt(1, 1);
				insertStudent.setString(2, "Andrew");
				insertStudent.setString(3, "A");
				insertStudent.executeUpdate();

				insertStudent.setInt(1, 2);
				insertStudent.setString(2, "John");
				insertStudent.setString(3, "B");
				insertStudent.executeUpdate();
			}

			try (PreparedStatement selectStudents = connection.prepareStatement(
					"SELECT id, name, grade FROM students");
				 ResultSet resultSet = selectStudents.executeQuery()) {
				while (resultSet.next()) {
					System.out.println(resultSet.getInt("id") + " " + resultSet.getString("name") + " " + resultSet.getString("grade"));
				}
			}
		}
	}
}