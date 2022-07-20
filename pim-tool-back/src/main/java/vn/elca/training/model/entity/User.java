package vn.elca.training.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author gtn
 *
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 128, unique = true, nullable = false)
    private String username;

    @Column
    private String fullName;

    @Column
    private String visa;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    @JsonIgnore
    private List<Task> tasks;

    @ManyToMany
    private List<Project> project = new ArrayList<Project>();

    public User() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
        setUserForTasks(tasks);
    }

    public void setUserForTasks(List<Task> tasks) {
        for(Task t: tasks) {
            t.setUser(this);
        }
    }

    public List<Project> getProject() {
        return project;
    }

    public void setProject(List<Project> project) {
        this.project = project;
    }

    public String getVisa() {
        return visa;
    }

    public void setVisa(String visa) {
        this.visa = visa;
    }
}