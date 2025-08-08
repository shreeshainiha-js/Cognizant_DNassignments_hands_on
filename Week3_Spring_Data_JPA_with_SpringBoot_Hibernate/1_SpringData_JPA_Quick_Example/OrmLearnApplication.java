package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Department;
import com.cognizant.orm_learn.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private DepartmentRepository departmentRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Saving departments
        departmentRepository.save(new Department(1, "IT"));
        departmentRepository.save(new Department(2, "HR"));
        departmentRepository.save(new Department(3, "Finance"));

        // Fetching all departments
        List<Department> departments = departmentRepository.findAll();
        System.out.println(">>> Departments in Database:");
        for (Department dept : departments) {
            System.out.println(dept);
        }
    }
}
