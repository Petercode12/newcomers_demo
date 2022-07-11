package vn.elca.training.repository;

import com.querydsl.jpa.impl.JPAQuery;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import vn.elca.training.ApplicationWebConfig;
import vn.elca.training.model.entity.Employee;
import vn.elca.training.model.entity.Project;
import vn.elca.training.model.entity.QProject;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@ContextConfiguration(classes = {ApplicationWebConfig.class})
@RunWith(value=SpringRunner.class)
public class ProjectRepositoryTest {
    @PersistenceContext
    private EntityManager em;
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    public void testSaveMultipleProjects() {
        List<Employee> eList = new ArrayList<Employee>();
        eList.add(new Employee("QMV", "Group Leader"));
        eList.add(new Employee("HTV", "Project Leader"));
        eList.add(new Employee("TQP", "Developer"));
        eList.add(new Employee("HNH", "Quality Agent"));
        eList.add(new Employee("NQN", "Developer"));
        employeeRepository.saveAll(eList);
        Project p1 = new Project(101L, 1L, "EFV", eList);

        List<Employee> eList2 = new ArrayList<Employee>();
        eList2.add(new Employee("QMV", "Group Leader"));
        eList2.add(new Employee("QKP", "Project Leader"));
        eList2.add(new Employee("PLH", "Quality Agent"));
        eList2.add(new Employee("HNL", "Developer"));
        employeeRepository.saveAll(eList2);
        Project p2 = new Project(101L, 2L, "CXTRANET", eList2);

        List<Employee> eList3 = new ArrayList<Employee>();
        eList3.add(new Employee("QMV", "Group Leader"));
        eList3.add(new Employee("MKN", "Project Leader"));
        eList3.add(new Employee("TBH", "Quality Agent"));
        eList3.add(new Employee("TDN", "Developer"));
        employeeRepository.saveAll(eList3);
        Project p3 = new Project(101L, 3L, "CRYSTAL BALL", eList3);

        projectRepository.save(p1);
        projectRepository.save(p2);
        projectRepository.save(p3);

        Assert.assertEquals(8, projectRepository.count());
    }

    @Test
    public void testDeleteOne() {
        int count = Math.toIntExact(projectRepository.deleteByName("CRYSTAL BALL"));
        Assert.assertEquals(2, count);
    }

    @Test
    public void testSimpleQuery() {
        for (Project p: projectRepository.findAll()) {
            System.out.println(p.getName() + ": " + p.getFinishingDate());
        }
        Project p = new JPAQuery<Project>(em).from(QProject.project).where(QProject.project.name.eq("EFV")).fetchOne();
        if (p != null) {
            Assert.assertEquals(LocalDate.parse("2020-04-20"), p.getFinishingDate());
        }
    }

    @Test
    public void testCountAll() {
        projectRepository.save(new Project("KSTA", LocalDate.now()));
        projectRepository.save(new Project("LAGAPEO", LocalDate.now()));
        projectRepository.save(new Project("ZHQUEST", LocalDate.now()));
        projectRepository.save(new Project("SECUTIX", LocalDate.now()));
        Assert.assertEquals(10, projectRepository.count());
    }

    @Test
    public void testFindOneWithQueryDSL() {
        final String PROJECT_NAME = "KSTA";
        projectRepository.save(new Project(PROJECT_NAME, LocalDate.now()));
        Project project = new JPAQuery<Project>(em)
                .from(QProject.project)
                .where(QProject.project.name.eq(PROJECT_NAME))
                .fetchFirst();
        Assert.assertEquals(PROJECT_NAME, project.getName());
    }
}
