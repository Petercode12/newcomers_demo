package vn.elca.training.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.elca.training.model.dto.ProjectDto;
import vn.elca.training.model.entity.Project;
import vn.elca.training.service.ProjectService;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author gtn
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/projects")
public class ProjectController extends AbstractApplicationController {


    @Autowired
    @Qualifier("projectServiceImpl")
    private ProjectService projectService;

    @GetMapping("/search")
    public List<ProjectDto> search() {
        return projectService.findAll()
                .stream()
                .map(mapper::projectToProjectDto)
                .collect(Collectors.toList());
    }

    @PutMapping({"/update"})
    public Project update(@RequestBody List<Project> projects) {
        if (projects.get(0) == null) {
            throw new IllegalArgumentException("Invalid request! Project not found");
        }
        return projectService.update(projects.get(0), projects.get(1));
    }

    @PostMapping({"/remove"})
    public void remove(@RequestBody Project project) {
        if (project == null) {
            throw new IllegalArgumentException("Invalid request! Project not found");
        }
        projectService.remove(project);
    }
}
