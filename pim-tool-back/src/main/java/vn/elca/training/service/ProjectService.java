package vn.elca.training.service;

import vn.elca.training.model.entity.Project;

import java.util.List;

/**
 * @author vlp
 *
 */
public interface ProjectService {
    List<Project> findAll();

    long count();

    Project update(Project project, Project project1);

    void remove(Project project);
}
