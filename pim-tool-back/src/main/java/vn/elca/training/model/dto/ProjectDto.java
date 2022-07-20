package vn.elca.training.model.dto;

import java.time.LocalDate;
import vn.elca.training.model.entity.Project.STATUS;

/**
 * @author gtn
 *
 */


public class ProjectDto {
    private Long id;
    private Long projectNumber;
    private String name;
    private String customer;
    private LocalDate finishingDate;
    private LocalDate startDate;
    private STATUS status;

    private String memberVisa;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProjectNumber() {
        return projectNumber;
    }

    public void setProjectNumber(Long projectNumber) {
        this.projectNumber = projectNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public LocalDate getFinishingDate() {
        return finishingDate;
    }

    public void setFinishingDate(LocalDate finishingDate) {
        this.finishingDate = finishingDate;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public STATUS getStatus() {
        return status;
    }

    public void setStatus(STATUS status) {
        this.status = status;
    }

    public String getMemberVisa() {
        return memberVisa;
    }

    public void setMemberVisa(String memberVisa) {
        this.memberVisa = memberVisa;
    }
}
