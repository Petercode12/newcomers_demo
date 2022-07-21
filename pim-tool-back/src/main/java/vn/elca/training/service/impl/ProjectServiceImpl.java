package vn.elca.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import vn.elca.training.model.entity.Project;
import vn.elca.training.repository.ProjectRepository;
import vn.elca.training.service.ProjectService;

import java.util.List;
<<<<<<< Updated upstream
=======
import java.util.Objects;
import java.util.Optional;
>>>>>>> Stashed changes

/**
 * @author vlp
 *
 */
@Service
@Profile("!dummy | dev")
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    @Override
    public long count() {
        return projectRepository.count();
    }

    @Override
<<<<<<< Updated upstream
    public Project update(Project project) {
        return projectRepository.save(project);
=======
    public Project update(Project project, Project project1) {
        if (project1 != null) {
            Optional<Project> checkProject = projectRepository.findById(project1.getId());
            if (checkProject.isPresent()) {
                if (checkProject.get().getName().equals(project1.getName()) && checkProject.get().getCustomer().equals(project1.getCustomer()) && checkProject.get().getStatus() == project1.getStatus() && checkProject.get().getStartDate().equals(project1.getStartDate())) {
                    return projectRepository.save(project);
                } else {
                    throw new IllegalArgumentException("A thread has updated this version");
                }
            } else {
                throw new IllegalArgumentException("This project was deleted");
            }
        }
        else {
            List<Project> checkProjects = findAll();
            for (Project p: checkProjects) {
                if (Objects.equals(p.getProjectNumber(), project.getProjectNumber())) {
                    System.out.println("Duplicate here");
                    throw new IllegalArgumentException("Duplicate project number");
                }
            }
            return projectRepository.save(project);
        }
>>>>>>> Stashed changes
    }

    @Override
    public void remove(Project project) {
        projectRepository.delete(project);
    }
}
