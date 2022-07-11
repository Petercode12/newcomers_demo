package vn.elca.training.repository.custom;

import com.querydsl.jpa.impl.JPAQuery;
import vn.elca.training.model.entity.Project;
import vn.elca.training.model.entity.QProject;
import vn.elca.training.model.entity.QTask;
import vn.elca.training.model.entity.Task;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author gtn
 *
 */
// Rename this class so that Spring can scan and wire this component correctly
public class TaskRepositoryCustomImpl implements TaskRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Project> findProjectsByTaskName(String taskName) {
//        List<Project> projects = em.createQuery("select p from Project p left join fetch p.tasks where Task.name LIKE " + taskName, Project.class).getResultList();
//        return projects;

        List<Project> projects = new JPAQuery<Project>(em)
                .from(QProject.project)
                .innerJoin(QProject.project.tasks, QTask.task).fetchJoin()
                .where(QTask.task.name.eq(taskName))
                .fetch();
        return projects;
    }

    @Override
    public List<Task> listRecentTasks(int limit) {
        List<Task> tasks = em.createQuery("select t from Task t join fetch t.project order by t.id desc", Task.class).setMaxResults(limit).getResultList();
        return tasks;
//        return new JPAQuery<Task>(em)
//                .from(QTask.task)
//                .orderBy(QTask.task.id.desc())
//                .limit(limit)
//                .fetch();
    }

    @Override
    public List<Task> getlistTasksById(List<Long> ids) {
        return new JPAQuery<Task>(em).from(QTask.task).where(QTask.task.id.in(ids)).fetch();
        // Should throw exception if not found
    }
}
