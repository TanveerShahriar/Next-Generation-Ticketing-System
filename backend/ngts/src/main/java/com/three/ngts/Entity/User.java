package com.three.ngts.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "address")
    private String address;

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    private Name name;

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
    private List<Phone> phone;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Auth> auths;

    @OneToOne(mappedBy = "userId", fetch = FetchType.LAZY)
    private Driver driver;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "driver", fetch = FetchType.LAZY)
    private List<BusSchedule> busSchedules;

    @OneToMany(mappedBy = "reviewer", fetch = FetchType.LAZY)
    private List<DriverReview> driverReviewer;

    @OneToMany(mappedBy = "driver", fetch = FetchType.LAZY)
    private List<DriverReview> driverReviews;

    @OneToMany(mappedBy = "reviewer", fetch = FetchType.LAZY)
    private List<BusReview> busReviewer;
}
