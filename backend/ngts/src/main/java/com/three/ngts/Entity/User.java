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

    @OneToOne(mappedBy = "user")
    private Name name;

    @OneToMany(mappedBy = "userId")
    private List<Phone> phone;

    @OneToMany(mappedBy = "userId")
    private List<Auth> auths;

    @OneToOne(mappedBy = "userId")
    private Driver driver;

    @OneToMany(mappedBy = "user")
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "driver")
    private List<BusSchedule> busSchedules;

    @OneToMany(mappedBy = "reviewer")
    private List<DriverReview> driverReviewer;

    @OneToMany(mappedBy = "driver")
    private List<DriverReview> driverReviews;

    @OneToMany(mappedBy = "reviewer")
    private List<BusReview> busReviewer;
}
