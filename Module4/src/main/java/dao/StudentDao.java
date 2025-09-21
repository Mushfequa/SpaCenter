package dao;



	import java.sql.Connection;

	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import java.sql.SQLException;
	import java.sql.Statement;
	import java.util.ArrayList;

	import bean.Student;
	import util.DatabaseUtil;


public class StudentDao {
		public int insertStudent(Student student) throws SQLException {

			Connection conn = DatabaseUtil.getConnection();
			String sql = "INSERT INTO student(name,email,contact,password,gender,education) VALUES(?,?,?,?,?,?)";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setString(1, student.getName());
			stmt.setString(2, student.getEmail());
			stmt.setString(3, student.getContact());
			stmt.setString(4, student.getPassword());
			stmt.setString(5, student.getGender());
			stmt.setString(6, student.getEducation());

			int Status = stmt.executeUpdate();
			return Status;

		}

		public int updateStudent(Student student) throws SQLException {
			Connection conn = DatabaseUtil.getConnection();
			String sql = "UPDATE students SET name=?,email=?,contact=?,password=?,gender=?,education=? WHERE id=?";

			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setString(1, student.getName());
			stmt.setString(2, student.getEmail());
			stmt.setString(3, student.getContact());
			stmt.setString(4, student.getPassword());
			stmt.setString(5, student.getGender());
			stmt.setString(6, student.getEducation());


			stmt.setInt(7, student.getId());

			int Status = stmt.executeUpdate();
			return Status;

		}

		public int deleteStudent(int id) throws SQLException {
			int status = 0;
			Connection conn = DatabaseUtil.getConnection();
			String sql = "DELETE FROM students WHERE id=?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setInt(1, id);
			status = stmt.executeUpdate();
			return status;

		}

		public Student getStudentByID(int id) throws SQLException {
			Student student = null;
			Connection conn = DatabaseUtil.getConnection();
			String sql = "SELECT * FROM students WHERE id = ?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setInt(1, id);
			ResultSet rs = stmt.executeQuery();

			System.out.println("SQL : "+sql);
			
			if (rs.next()) {
				student = new Student();
				student.setId(rs.getInt("id"));
				student.setName(rs.getString("name"));
				student.setEmail(rs.getString("email"));
				student.setContact(rs.getString("contact"));
				student.setPassword(rs.getString("password"));
				student.setGender(rs.getString("gender"));
				student.setEducation(rs.getString("education"));


			}
			return student;

		}

		public ArrayList<Student> getStudentList() throws SQLException {
			ArrayList<Student> student = new ArrayList<Student>();
			Connection conn = DatabaseUtil.getConnection();
			String sql = "SELECT * FROM students";
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);

			while (rs.next()) {
				Student s = new Student();
				s.setId(rs.getInt("id"));
				s.setName(rs.getString("name"));
				s.setEmail(rs.getString("email"));
				s.setContact(rs.getString("contact"));
				s.setPassword(rs.getString("password"));
				s.setGender(rs.getString("gender"));

				s.setEducation(rs.getString("education"));

				student.add(student);

			}
			return students;

		}
	}



