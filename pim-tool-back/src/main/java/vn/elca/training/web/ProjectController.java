package vn.elca.training.web;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import vn.elca.training.model.dto.ProjectDto;
import vn.elca.training.model.dto.UserDto;
import vn.elca.training.model.entity.Project;
import vn.elca.training.model.entity.User;
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
    public Project update(@RequestBody Project project) {
        if (project == null) {
            throw new IllegalArgumentException("Invalid request! Project not found");
        }
        return projectService.update(project);
    }
}
